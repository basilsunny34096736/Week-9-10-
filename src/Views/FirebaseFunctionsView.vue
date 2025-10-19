<template>
  <div class="container mt-4">
    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-header">
            <h4>Firebase Functions Dashboard</h4>
          </div>
          <div class="card-body">
            
            <!-- Book Count Function -->
            <div class="mb-4">
              <h5>Book Count Function</h5>
              <div class="row">
                <div class="col-md-8">
                  <div class="alert alert-info">
                    <strong>Function:</strong> getBookCount<br>
                    <strong>Purpose:</strong> Get total number of books in Firestore<br>
                    <strong>Type:</strong> HTTPS Callable Function
                  </div>
                </div>
                <div class="col-md-4">
                  <button 
                    class="btn btn-primary w-100" 
                    @click="getBookCount" 
                    :disabled="loading"
                  >
                    <span v-if="loading" class="spinner-border spinner-border-sm me-2"></span>
                    Get Book Count
                  </button>
                </div>
              </div>
              
              <div v-if="bookCountResult" class="mt-3">
                <div class="alert" :class="bookCountResult.success ? 'alert-success' : 'alert-danger'">
                  <h6>{{ bookCountResult.success ? 'Success!' : 'Error!' }}</h6>
                  <p v-if="bookCountResult.success">
                    <strong>Total Books:</strong> {{ bookCountResult.bookCount }}<br>
                    <strong>Message:</strong> {{ bookCountResult.message }}
                  </p>
                  <p v-else>
                    <strong>Error:</strong> {{ bookCountResult.error }}
                  </p>
                </div>
              </div>
            </div>

            <!-- Book Statistics Function -->
            <div class="mb-4">
              <h5>Book Statistics Function</h5>
              <div class="row">
                <div class="col-md-8">
                  <div class="alert alert-info">
                    <strong>Function:</strong> getBookStatistics<br>
                    <strong>Purpose:</strong> Get detailed statistics about books<br>
                    <strong>Type:</strong> HTTPS Callable Function
                  </div>
                </div>
                <div class="col-md-4">
                  <button 
                    class="btn btn-success w-100" 
                    @click="getBookStatistics" 
                    :disabled="loading"
                  >
                    <span v-if="loading" class="spinner-border spinner-border-sm me-2"></span>
                    Get Statistics
                  </button>
                </div>
              </div>
              
              <div v-if="statisticsResult" class="mt-3">
                <div class="alert" :class="statisticsResult.success ? 'alert-success' : 'alert-danger'">
                  <h6>{{ statisticsResult.success ? 'Statistics Retrieved!' : 'Error!' }}</h6>
                  <div v-if="statisticsResult.success && statisticsResult.statistics">
                    <div class="row">
                      <div class="col-md-6">
                        <h6>Basic Stats:</h6>
                        <p><strong>Total Books:</strong> {{ statisticsResult.statistics.totalBooks }}</p>
                        <p><strong>Total Value:</strong> ${{ statisticsResult.statistics.totalValue }}</p>
                        <p><strong>Average Value:</strong> ${{ statisticsResult.statistics.averageValue }}</p>
                      </div>
                      <div class="col-md-6">
                        <h6>Categories:</h6>
                        <ul class="list-unstyled">
                          <li v-for="(count, category) in statisticsResult.statistics.categories" :key="category">
                            <strong>{{ category }}:</strong> {{ count }} books
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <p v-else>
                    <strong>Error:</strong> {{ statisticsResult.error }}
                  </p>
                </div>
              </div>
            </div>

            <!-- Loading State -->
            <div v-if="loading" class="text-center mt-3">
              <div class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
              <p class="mt-2">Calling Firebase Function...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { getBookCount as getBookCountService, getBookStatistics as getBookStatisticsService } from '../firebase/functionsService.js'

// Reactive data
const loading = ref(false)
const bookCountResult = ref(null)
const statisticsResult = ref(null)

// Get book count
const getBookCount = async () => {
  loading.value = true
  bookCountResult.value = null
  
  try {
    const result = await getBookCountService()
    bookCountResult.value = result
  } catch (error) {
    bookCountResult.value = {
      success: false,
      error: error.message
    }
  } finally {
    loading.value = false
  }
}

// Get book statistics
const getBookStatistics = async () => {
  loading.value = true
  statisticsResult.value = null
  
  try {
    const result = await getBookStatisticsService()
    statisticsResult.value = result
  } catch (error) {
    statisticsResult.value = {
      success: false,
      error: error.message
    }
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

.alert {
  border-radius: 0.375rem;
}

.table th {
  background-color: #f8f9fa;
  font-weight: 600;
}

.card-header h4 {
  margin-bottom: 0.5rem;
}

.card-header p {
  margin-bottom: 0;
}
</style>
