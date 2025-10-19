import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged,
  updateProfile
} from 'firebase/auth'
import { auth } from './config.js'

// User roles
export const USER_ROLES = {
  ADMIN: 'admin',
  USER: 'user',
  MODERATOR: 'moderator'
}

// Simple Firebase authentication service
export class SimpleAuthService {
  constructor() {
    this.currentUser = null
    this.userRole = null
    this.listeners = []
    
    // Listen to auth state changes
    onAuthStateChanged(auth, (user) => {
      this.currentUser = user
      // Default to 'user' role for all users
      this.userRole = user ? USER_ROLES.USER : null
      
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
      
      return { success: true, user }
    } catch (error) {
      console.error('Registration error:', error)
      return { success: false, error: error.message }
    }
  }

  // Sign in with email and password
  async signIn(email, password) {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password)
      return { success: true, user: userCredential.user }
    } catch (error) {
      console.error('Sign in error:', error)
      return { success: false, error: error.message }
    }
  }

  // Sign out
  async signOut() {
    try {
      await signOut(auth)
      return { success: true }
    } catch (error) {
      console.error('Sign out error:', error)
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
export const simpleAuthService = new SimpleAuthService()
