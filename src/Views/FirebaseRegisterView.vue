<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div class="card">
          <div class="card-header">
            <h4 class="mb-0">Firebase Registration</h4>
          </div>
          
          <div class="card-body">
            <form @submit.prevent="handleRegister">
              <div class="mb-3">
                <label for="displayName" class="form-label">Full Name</label>
                <input 
                  type="text" 
                  class="form-control" 
                  id="displayName"
                  v-model="registerForm.displayName"
                  required
                  placeholder="Enter your full name"
                >
              </div>
              
              <div class="mb-3">
                <label for="email" class="form-label">Email address</label>
                <input 
                  type="email" 
                  class="form-control" 
                  id="email"
                  v-model="registerForm.email"
                  required
                  placeholder="Enter your email"
                >
              </div>
              
              <div class="mb-3">
                <label for="password" class="form-label">Password</label>
                <input 
                  type="password" 
                  class="form-control" 
                  id="password"
                  v-model="registerForm.password"
                  required
                  minlength="6"
                  placeholder="Enter your password (min 6 characters)"
                >
              </div>
              
              
              <button type="submit" class="btn btn-success w-100" :disabled="loading">
                <span v-if="loading" class="spinner-border spinner-border-sm me-2"></span>
                Create Account
              </button>
            </form>

            <!-- Alert Messages -->
            <div v-if="message" class="alert mt-3" :class="messageType">
              {{ message }}
            </div>

            <!-- Current User Info -->
            <div v-if="currentUser" class="mt-4 p-3 bg-light rounded">
              <h6>Registration Successful!</h6>
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
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import { simpleAuthService } from '../firebase/simpleAuthService.js'

// Router
const router = useRouter()

// Reactive data
const loading = ref(false)
const message = ref('')
const messageType = ref('')
const currentUser = ref(null)
const currentUserRole = ref(null)

// Form data
const registerForm = ref({
  displayName: '',
  email: '',
  password: ''
})

// Auth state listener
let unsubscribe = null

// Computed properties for statistics (removed - not needed for real auth)

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

// Handle registration
const handleRegister = async () => {
  loading.value = true
  message.value = ''
  
  try {
    const result = await simpleAuthService.register(
      registerForm.value.email,
      registerForm.value.password,
      registerForm.value.displayName,
      'user' // Default role for all registrations
    )
    
    if (result.success) {
      message.value = 'Registration successful! Redirecting to signin page...'
      messageType.value = 'alert-success'
      
      // Reset form after successful registration
      registerForm.value = {
        displayName: '',
        email: '',
        password: ''
      }
      
      // Logout the auto-logged in user
      await simpleAuthService.signOut()
      
      // Redirect to signin page after 2 seconds
      setTimeout(() => {
        router.push('/auth')
      }, 2000)
    } else {
      message.value = `Registration failed: ${result.error}`
      messageType.value = 'alert-danger'
    }
  } catch (error) {
    message.value = `Registration error: ${error.message}`
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
.spinner-border-sm {
  width: 1rem;
  height: 1rem;
}

.card-header h4 {
  color: #198754;
}

.border {
  border-color: #dee2e6 !important;
}
</style>
