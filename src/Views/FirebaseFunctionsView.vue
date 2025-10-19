<template>
  <div class="container mt-4">
    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-header">
            <h4>Firebase Functions Dashboard</h4>
            <p class="mb-0 text-muted">EFOLIO Task 9 - Firebase Functions Integration</p>
          </div>
          <div class="card-body">
            
            <!-- Task 9.1: Book Count -->
            <div class="mb-4">
              <h5>Task 9.1: Book Count Function</h5>
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

            <!-- Task 9.2: Book Statistics -->
            <div class="mb-4">
              <h5>Task 9.2: Book Statistics Function</h5>
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

            <!-- Search Function -->
            <div class="mb-4">
              <h5>Bonus: Search Books Function</h5>
              <div class="row">
                <div class="col-md-6">
                  <div class="input-group">
                    <input 
                      type="text" 
                      class="form-control" 
                      v-model="searchTerm" 
                      placeholder="Enter book title to search"
                    >
                    <button 
                      class="btn btn-outline-primary" 
                      @click="searchBooks" 
                      :disabled="loading || !searchTerm"
                    >
                      Search
                    </button>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="alert alert-info">
                    <strong>Function:</strong> searchBooks<br>
                    <strong>Purpose:</strong> Search books by title<br>
                    <strong>Type:</strong> HTTPS Callable Function
                  </div>
                </div>
              </div>
              
              <div v-if="searchResult" class="mt-3">
                <div class="alert" :class="searchResult.success ? 'alert-success' : 'alert-danger'">
                  <h6>{{ searchResult.success ? 'Search Results!' : 'Error!' }}</h6>
                  <div v-if="searchResult.success">
                    <p><strong>Found:</strong> {{ searchResult.count }} books</p>
                    <div v-if="searchResult.results && searchResult.results.length > 0" class="table-responsive">
                      <table class="table table-sm">
                        <thead>
                          <tr>
                            <th>Title</th>
                            <th>Author</th>
                            <th>Category</th>
                            <th>Price</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr v-for="book in searchResult.results" :key="book.id">
                            <td>{{ book.title }}</td>
                            <td>{{ book.author }}</td>
                            <td>{{ book.category }}</td>
                            <td>${{ book.price || 'N/A' }}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <p v-else>
                    <strong>Error:</strong> {{ searchResult.error }}
                  </p>
                </div>
              </div>
            </div>

            <!-- Function Information -->
            <div class="mt-4">
              <h5>Firebase Functions Information</h5>
              <div class="alert alert-warning">
                <h6>Important Notes:</h6>
                <ul class="mb-0">
                  <li><strong>Task 9.1:</strong> Use the "Get Book Count" button to call the getBookCount function</li>
                  <li><strong>Task 9.2:</strong> The capitalizeBookData function runs automatically when you add a new book</li>
                  <li><strong>Deployment:</strong> Functions must be deployed to Firebase to work</li>
                  <li><strong>Testing:</strong> Add a book first, then check if the data is capitalized in Firestore</li>
                </ul>
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
import { getBookCount as getBookCountService, getBookStatistics as getBookStatisticsService, searchBooks as searchBooksService } from '../firebase/functionsService.js'

// Reactive data
const loading = ref(false)
const bookCountResult = ref(null)
const statisticsResult = ref(null)
const searchResult = ref(null)
const searchTerm = ref('')

// Get book count (Task 9.1)
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

// Search books
const searchBooks = async () => {
  if (!searchTerm.value.trim()) return
  
  loading.value = true
  searchResult.value = null
  
  try {
    const result = await searchBooksService(searchTerm.value)
    searchResult.value = result
  } catch (error) {
    searchResult.value = {
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
