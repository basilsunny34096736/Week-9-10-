// Mock authentication service for EFOLIO tasks
// This simulates Firebase authentication without requiring actual Firebase setup

// User roles
export const USER_ROLES = {
  ADMIN: 'admin',
  USER: 'user',
  MODERATOR: 'moderator'
}

// Mock user data storage
let mockUsers = []
let currentUser = null
let currentUserRole = null
let listeners = []

// Mock authentication service
export class MockAuthService {
  constructor() {
    this.currentUser = null
    this.userRole = null
    this.listeners = []
  }

  // Register a new user
  async register(email, password, displayName, role = USER_ROLES.USER) {
    try {
      // Check if user already exists
      const existingUser = mockUsers.find(user => user.email === email)
      if (existingUser) {
        return { success: false, error: 'User already exists' }
      }

      // Create new user
      const newUser = {
        uid: `mock-${Date.now()}`,
        email: email,
        displayName: displayName,
        role: role,
        password: password,
        createdAt: new Date()
      }

      mockUsers.push(newUser)
      
      // Auto-login after registration
      this.currentUser = newUser
      this.userRole = newUser.role
      
      // Notify listeners
      this.notifyListeners()
      
      return { success: true, user: newUser }
    } catch (error) {
      return { success: false, error: error.message }
    }
  }

  // Sign in with email and password
  async signIn(email, password) {
    try {
      const user = mockUsers.find(u => u.email === email && u.password === password)
      
      if (!user) {
        return { success: false, error: 'Invalid email or password' }
      }

      this.currentUser = user
      this.userRole = user.role
      
      // Notify listeners
      this.notifyListeners()
      
      return { success: true, user: user }
    } catch (error) {
      return { success: false, error: error.message }
    }
  }

  // Sign out
  async signOut() {
    try {
      console.log('User signed out:', this.currentUser)
      this.currentUser = null
      this.userRole = null
      
      // Notify listeners
      this.notifyListeners()
      
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
    
    // Call immediately with current state
    callback(this.currentUser, this.userRole)
    
    return () => {
      const index = this.listeners.indexOf(callback)
      if (index > -1) {
        this.listeners.splice(index, 1)
      }
    }
  }

  // Notify all listeners
  notifyListeners() {
    this.listeners.forEach(listener => {
      listener(this.currentUser, this.userRole)
    })
  }

  // Get all users (for admin purposes)
  getAllUsers() {
    return mockUsers
  }
}

// Create singleton instance
export const mockAuthService = new MockAuthService()
