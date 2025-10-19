<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div class="card">
          <div class="card-header">
            <h4 class="mb-0">Firebase Sign In</h4>
          </div>
          
          <div class="card-body">
            <!-- Login Form -->
            <div class="tab-content">
              <h5 class="card-title">Sign In</h5>
              <div class="alert alert-info">
                <strong>Note:</strong> You must register first before you can sign in. 
                <router-link to="/register" class="alert-link">Click here to register</router-link>
              </div>
              <form @submit.prevent="handleLogin">
                <div class="mb-3">
                  <label for="loginEmail" class="form-label">Email address</label>
                  <input 
                    type="email" 
                    class="form-control" 
                    id="loginEmail"
                    v-model="loginForm.email"
                    required
                  >
                </div>
                <div class="mb-3">
                  <label for="loginPassword" class="form-label">Password</label>
                  <input 
                    type="password" 
                    class="form-control" 
                    id="loginPassword"
                    v-model="loginForm.password"
                    required
                  >
                </div>
                <button type="submit" class="btn btn-primary" :disabled="loading">
                  <span v-if="loading" class="spinner-border spinner-border-sm me-2"></span>
                  Sign In
                </button>
              </form>
              
            </div>

            <!-- Alert Messages -->
            <div v-if="message" class="alert mt-3" :class="messageType">
              {{ message }}
            </div>

            <!-- Current User Info -->
            <div v-if="currentUser" class="mt-4 p-3 bg-light rounded">
              <h6>Current User:</h6>
              <p><strong>Name:</strong> {{ currentUser.displayName || 'N/A' }}</p>
              <p><strong>Email:</strong> {{ currentUser.email }}</p>
              <p><strong>Role:</strong> {{ currentUserRole || 'N/A' }}</p>
              <p><strong>UID:</strong> {{ currentUser.uid }}</p>
              <button @click="handleLogout" class="btn btn-danger btn-sm">
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { simpleAuthService } from '../firebase/simpleAuthService.js'

// Reactive data
const loading = ref(false)
const message = ref('')
const messageType = ref('')
const currentUser = ref(null)
const currentUserRole = ref(null)

// Form data
const loginForm = ref({
  email: '',
  password: ''
})

// Auth state listener
let unsubscribe = null

onMounted(() => {
  // Listen to auth state changes
  unsubscribe = simpleAuthService.onAuthStateChange((user, role) => {
    currentUser.value = user
    currentUserRole.value = role
  })
})

onUnmounted(() => {
  if (unsubscribe) {
    unsubscribe()
  }
})

// Handle login
const handleLogin = async () => {
  loading.value = true
  message.value = ''
  
  try {
    const result = await simpleAuthService.signIn(loginForm.value.email, loginForm.value.password)
    
    if (result.success) {
      message.value = 'Login successful!'
      messageType.value = 'alert-success'
    } else {
      message.value = `Login failed: ${result.error}`
      messageType.value = 'alert-danger'
    }
  } catch (error) {
    message.value = `Login error: ${error.message}`
    messageType.value = 'alert-danger'
  } finally {
    loading.value = false
  }
}


// Handle logout
const handleLogout = async () => {
  loading.value = true
  
  try {
    const result = await simpleAuthService.signOut()
    if (result.success) {
      message.value = 'Logged out successfully!'
      messageType.value = 'alert-info'
    } else {
      message.value = `Logout failed: ${result.error}`
      messageType.value = 'alert-danger'
    }
  } catch (error) {
    message.value = `Logout error: ${error.message}`
    messageType.value = 'alert-danger'
  } finally {
    loading.value = false
  }
}

</script>

<style scoped>
.nav-tabs .nav-link {
  border: none;
  border-bottom: 2px solid transparent;
}

.nav-tabs .nav-link.active {
  border-bottom-color: #0d6efd;
  background-color: transparent;
}

.spinner-border-sm {
  width: 1rem;
  height: 1rem;
}
</style>
