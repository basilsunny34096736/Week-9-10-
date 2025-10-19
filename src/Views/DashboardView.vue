<template>
  <div class="container mt-4">
    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-header d-flex justify-content-between align-items-center">
            <h4>User Dashboard</h4>
            <div>
              <span class="badge bg-primary me-2">{{ currentUserRole }}</span>
              <button @click="handleLogout" class="btn btn-outline-danger btn-sm">
                Logout
              </button>
            </div>
          </div>
          <div class="card-body">

            <!-- Role-based Content -->
            <div class="row">
              <!-- Admin Content -->
              <div v-if="isAdmin" class="col-12 mb-4">
                <div class="alert alert-danger">
                  <h5>🔒 Admin Panel</h5>
                  <p>You have full administrative access to the system.</p>
                  <button class="btn btn-danger">Delete All Data</button>
                  <button class="btn btn-warning ms-2">Manage Users</button>
                </div>
              </div>

              <!-- Moderator Content -->
              <div v-if="isModerator" class="col-12 mb-4">
                <div class="alert alert-warning">
                  <h5>🛡️ Moderator Panel</h5>
                  <p>You have moderation privileges.</p>
                  <button class="btn btn-warning">Moderate Content</button>
                  <button class="btn btn-info ms-2">View Reports</button>
                </div>
              </div>

              <!-- Regular User Content -->
              <div class="col-12">
                <div class="alert alert-info">
                  <h5>👤 User Panel</h5>
                  <p>Welcome to your dashboard!</p>
                  <button class="btn btn-primary">View Profile</button>
                  <button class="btn btn-secondary ms-2">Settings</button>
                </div>
              </div>
            </div>


            <!-- Library Registration Data -->
            <div class="mt-4">
              <h6>Library Registration Data</h6>
              <p class="text-muted">Total registrations: {{ dataStore.getRecordCount() }}</p>
              
              <div v-if="dataStore.getRecords().length > 0" class="table-responsive">
                <table class="table table-striped">
                  <thead>
                    <tr>
                      <th>Username</th>
                      <th>Gender</th>
                      <th>Australian Resident</th>
                      <th>Suburb</th>
                      <th>Reason</th>
                      <th>Registered</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="record in dataStore.getRecords()" :key="record.id">
                      <td>{{ record.username }}</td>
                      <td>{{ record.gender || '-' }}</td>
                      <td>
                        <span class="badge" :class="record.resident ? 'bg-success' : 'bg-secondary'">
                          {{ record.resident ? 'Yes' : 'No' }}
                        </span>
                      </td>
                      <td>{{ record.suburb }}</td>
                      <td>{{ record.reason }}</td>
                      <td>{{ new Date(record.createdAt).toLocaleDateString() }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div v-else class="alert alert-info">
                <h6>No registrations yet</h6>
                <p>Go to the <router-link to="/">Home page</router-link> to submit the library registration form.</p>
              </div>
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
import { dataStore } from '../store/dataStore.js'

// Router
const router = useRouter()

// Reactive data
const currentUser = ref(null)
const currentUserRole = ref('user') // Default role

// Computed properties
const isAdmin = computed(() => currentUserRole.value === 'admin')
const isModerator = computed(() => currentUserRole.value === 'moderator' || currentUserRole.value === 'admin')

// Auth state listener
let unsubscribe = null

onMounted(() => {
  // Listen to auth state changes
  unsubscribe = simpleAuthService.onAuthStateChange((user, role) => {
    currentUser.value = user
    currentUserRole.value = role || 'user'
  })
})

onUnmounted(() => {
  if (unsubscribe) {
    unsubscribe()
  }
})

// Handle logout
const handleLogout = async () => {
  try {
    await simpleAuthService.signOut()
    // Redirect to signin page after logout
    router.push('/auth')
  } catch (error) {
    // Handle logout error silently
  }
}

</script>

<style scoped>
.badge {
  font-size: 0.8em;
}

.alert {
  border-left: 4px solid;
}

.alert-danger {
  border-left-color: #dc3545;
}

.alert-warning {
  border-left-color: #ffc107;
}

.alert-info {
  border-left-color: #0dcaf0;
}
</style>
