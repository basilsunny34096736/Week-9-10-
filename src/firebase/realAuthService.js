import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged,
  updateProfile
} from 'firebase/auth'
import { doc, setDoc, getDoc } from 'firebase/firestore'
import { auth, db } from './config.js'

// User roles
export const USER_ROLES = {
  ADMIN: 'admin',
  USER: 'user',
  MODERATOR: 'moderator'
}

// Real Firebase authentication service
export class RealAuthService {
  constructor() {
    this.currentUser = null
    this.userRole = null
    this.listeners = []
    
    // Listen to auth state changes
    onAuthStateChanged(auth, async (user) => {
      this.currentUser = user
      if (user) {
        // Get user role from Firestore (with error handling)
        try {
          this.userRole = await this.getUserRole(user.uid)
        } catch (error) {
          console.log('Could not get user role, using default:', error.message)
          this.userRole = USER_ROLES.USER
        }
      } else {
        this.userRole = null
      }
      
      // Notify listeners
      this.listeners.forEach(listener => listener(user, this.userRole))
    })
  }

  // Register a new user with email and password
  async register(email, password, displayName, role = USER_ROLES.USER) {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password)
      const user = userCredential.user
      
      // Update user profile
      await updateProfile(user, {
        displayName: displayName
      })
      
      // Save user role to Firestore (with error handling)
      try {
        await setDoc(doc(db, 'users', user.uid), {
          email: user.email,
          displayName: displayName,
          role: role,
          createdAt: new Date()
        })
      } catch (error) {
        console.log('Could not save user role to Firestore:', error.message)
        // Continue without Firestore - user is still registered
      }
      
      return { success: true, user }
    } catch (error) {
      return { success: false, error: error.message }
    }
  }

  // Sign in with email and password
  async signIn(email, password) {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password)
      return { success: true, user: userCredential.user }
    } catch (error) {
      return { success: false, error: error.message }
    }
  }

  // Sign out
  async signOut() {
    try {
      await signOut(auth)
      return { success: true }
    } catch (error) {
      return { success: false, error: error.message }
    }
  }

  // Get current user
  getCurrentUser() {
    return this.currentUser
  }

  // Get current user role
  getCurrentUserRole() {
    return this.userRole
  }

  // Get user role from Firestore
  async getUserRole(uid) {
    try {
      const userDoc = await getDoc(doc(db, 'users', uid))
      if (userDoc.exists()) {
        return userDoc.data().role
      }
      return USER_ROLES.USER // Default role
    } catch (error) {
      console.log('Could not get user role from Firestore:', error.message)
      return USER_ROLES.USER
    }
  }

  // Check if user has specific role
  hasRole(role) {
    return this.userRole === role
  }

  // Check if user is admin
  isAdmin() {
    return this.hasRole(USER_ROLES.ADMIN)
  }

  // Check if user is moderator or admin
  isModerator() {
    return this.hasRole(USER_ROLES.MODERATOR) || this.isAdmin()
  }

  // Add auth state listener
  onAuthStateChange(callback) {
    this.listeners.push(callback)
    return () => {
      const index = this.listeners.indexOf(callback)
      if (index > -1) {
        this.listeners.splice(index, 1)
      }
    }
  }
}

// Create singleton instance
export const realAuthService = new RealAuthService()
