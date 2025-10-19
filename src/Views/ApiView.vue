<template>
  <div class="container mt-4">
    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-header">
            <h4 class="mb-0">API Counters - EFOLIO Task 10.1</h4>
          </div>
          <div class="card-body">
            
            <!-- API Counters Display -->
            <div class="row">
              <div class="col-md-3 mb-3">
                <div class="card text-center bg-primary text-white">
                  <div class="card-body">
                    <h3 class="card-title">{{ counters.weatherRequests }}</h3>
                    <p class="card-text">Weather API Calls</p>
                  </div>
                </div>
              </div>
              
              <div class="col-md-3 mb-3">
                <div class="card text-center bg-success text-white">
                  <div class="card-body">
                    <h3 class="card-title">{{ counters.bookRequests }}</h3>
                    <p class="card-text">Book API Calls</p>
                  </div>
                </div>
              </div>
              
              <div class="col-md-3 mb-3">
                <div class="card text-center bg-warning text-dark">
                  <div class="card-body">
                    <h3 class="card-title">{{ counters.totalRequests }}</h3>
                    <p class="card-text">Total API Calls</p>
                  </div>
                </div>
              </div>
              
              <div class="col-md-3 mb-3">
                <div class="card text-center bg-info text-white">
                  <div class="card-body">
                    <h3 class="card-title">{{ counters.successfulRequests }}</h3>
                    <p class="card-text">Successful Calls</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- API Status -->
            <div class="row mt-4">
              <div class="col-12">
                <h5>API Status</h5>
                <div class="table-responsive">
                  <table class="table table-striped">
                    <thead>
                      <tr>
                        <th>API Endpoint</th>
                        <th>Status</th>
                        <th>Last Called</th>
                        <th>Response Time</th>
                        <th>Success Rate</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Weather API</td>
                        <td>
                          <span class="badge bg-success">Online</span>
                        </td>
                        <td>{{ apiStatus.weather.lastCalled || 'Never' }}</td>
                        <td>{{ apiStatus.weather.responseTime || 'N/A' }}ms</td>
                        <td>{{ apiStatus.weather.successRate || '0' }}%</td>
                      </tr>
                      <tr>
                        <td>Book API</td>
                        <td>
                          <span class="badge bg-success">Online</span>
                        </td>
                        <td>{{ apiStatus.book.lastCalled || 'Never' }}</td>
                        <td>{{ apiStatus.book.responseTime || 'N/A' }}ms</td>
                        <td>{{ apiStatus.book.successRate || '0' }}%</td>
                      </tr>
                      <tr>
                        <td>Firebase Functions</td>
                        <td>
                          <span class="badge bg-success">Online</span>
                        </td>
                        <td>{{ apiStatus.firebase.lastCalled || 'Never' }}</td>
                        <td>{{ apiStatus.firebase.responseTime || 'N/A' }}ms</td>
                        <td>{{ apiStatus.firebase.successRate || '0' }}%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <!-- API Test Buttons -->
            <div class="row mt-4">
              <div class="col-12">
                <h5>Test API Endpoints</h5>
                <div class="btn-group" role="group">
                  <button 
                    @click="testWeatherAPI" 
                    class="btn btn-outline-primary"
                    :disabled="testing"
                  >
                    <span v-if="testing" class="spinner-border spinner-border-sm me-2"></span>
                    Test Weather API
                  </button>
                  <button 
                    @click="testBookAPI" 
                    class="btn btn-outline-success"
                    :disabled="testing"
                  >
                    <span v-if="testing" class="spinner-border spinner-border-sm me-2"></span>
                    Test Book API
                  </button>
                  <button 
                    @click="testFirebaseFunctions" 
                    class="btn btn-outline-warning"
                    :disabled="testing"
                  >
                    <span v-if="testing" class="spinner-border spinner-border-sm me-2"></span>
                    Test Firebase Functions
                  </button>
                  <button 
                    @click="resetCounters" 
                    class="btn btn-outline-danger"
                  >
                    Reset Counters
                  </button>
                </div>
              </div>
            </div>

            <!-- Test Results -->
            <div v-if="testResults.length > 0" class="row mt-4">
              <div class="col-12">
                <h5>Test Results</h5>
                <div class="list-group">
                  <div 
                    v-for="(result, index) in testResults" 
                    :key="index"
                    class="list-group-item d-flex justify-content-between align-items-center"
                  >
                    <div>
                      <strong>{{ result.api }}</strong> - {{ result.message }}
                      <br>
                      <small class="text-muted">{{ result.timestamp }}</small>
                    </div>
                    <span 
                      class="badge"
                      :class="result.success ? 'bg-success' : 'bg-danger'"
                    >
                      {{ result.success ? 'Success' : 'Failed' }}
                    </span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { weatherService } from '../services/weatherService.js'
import { getAllBooks } from '../firebase/bookService.js'
import { getBookCount } from '../firebase/functionsService.js'

export default {
  name: 'ApiView',
  data() {
    return {
      counters: {
        weatherRequests: 0,
        bookRequests: 0,
        totalRequests: 0,
        successfulRequests: 0
      },
      apiStatus: {
        weather: {
          lastCalled: null,
          responseTime: null,
          successRate: 0
        },
        book: {
          lastCalled: null,
          responseTime: null,
          successRate: 0
        },
        firebase: {
          lastCalled: null,
          responseTime: null,
          successRate: 0
        }
      },
      testResults: [],
      testing: false
    }
  },
  methods: {
    async testWeatherAPI() {
      this.testing = true
      const startTime = Date.now()
      
      try {
        const result = await weatherService.getWeatherByCity('Melbourne, AU')
        const responseTime = Date.now() - startTime
        
        this.updateCounter('weather', true)
        this.updateApiStatus('weather', responseTime, true)
        
        this.testResults.unshift({
          api: 'Weather API',
          message: result.success ? 'Weather data retrieved successfully' : result.error,
          success: result.success,
          timestamp: new Date().toLocaleTimeString()
        })
      } catch (error) {
        this.updateCounter('weather', false)
        this.updateApiStatus('weather', Date.now() - startTime, false)
        
        this.testResults.unshift({
          api: 'Weather API',
          message: error.message,
          success: false,
          timestamp: new Date().toLocaleTimeString()
        })
      } finally {
        this.testing = false
      }
    },
    
    async testBookAPI() {
      this.testing = true
      const startTime = Date.now()
      
      try {
        const result = await getAllBooks()
        const responseTime = Date.now() - startTime
        
        this.updateCounter('book', true)
        this.updateApiStatus('book', responseTime, true)
        
        this.testResults.unshift({
          api: 'Book API',
          message: `Retrieved ${result.length} books successfully`,
          success: true,
          timestamp: new Date().toLocaleTimeString()
        })
      } catch (error) {
        this.updateCounter('book', false)
        this.updateApiStatus('book', Date.now() - startTime, false)
        
        this.testResults.unshift({
          api: 'Book API',
          message: error.message,
          success: false,
          timestamp: new Date().toLocaleTimeString()
        })
      } finally {
        this.testing = false
      }
    },
    
    async testFirebaseFunctions() {
      this.testing = true
      const startTime = Date.now()
      
      try {
        const result = await getBookCount()
        const responseTime = Date.now() - startTime
        
        this.updateCounter('firebase', true)
        this.updateApiStatus('firebase', responseTime, true)
        
        this.testResults.unshift({
          api: 'Firebase Functions',
          message: result.success ? `Book count: ${result.bookCount}` : result.error,
          success: result.success,
          timestamp: new Date().toLocaleTimeString()
        })
      } catch (error) {
        this.updateCounter('firebase', false)
        this.updateApiStatus('firebase', Date.now() - startTime, false)
        
        this.testResults.unshift({
          api: 'Firebase Functions',
          message: error.message,
          success: false,
          timestamp: new Date().toLocaleTimeString()
        })
      } finally {
        this.testing = false
      }
    },
    
    updateCounter(apiType, success) {
      this.counters.totalRequests++
      if (success) {
        this.counters.successfulRequests++
      }
      
      if (apiType === 'weather') {
        this.counters.weatherRequests++
      } else if (apiType === 'book') {
        this.counters.bookRequests++
      }
    },
    
    updateApiStatus(apiType, responseTime, success) {
      this.apiStatus[apiType].lastCalled = new Date().toLocaleTimeString()
      this.apiStatus[apiType].responseTime = responseTime
      
      // Calculate success rate (simplified)
      if (success) {
        this.apiStatus[apiType].successRate = Math.min(100, (this.apiStatus[apiType].successRate || 0) + 10)
      } else {
        this.apiStatus[apiType].successRate = Math.max(0, (this.apiStatus[apiType].successRate || 0) - 5)
      }
    },
    
    resetCounters() {
      this.counters = {
        weatherRequests: 0,
        bookRequests: 0,
        totalRequests: 0,
        successfulRequests: 0
      }
      this.testResults = []
    }
  },
  
  mounted() {
    // Initialize with some default values for demonstration
    this.counters.weatherRequests = 0
    this.counters.bookRequests = 0
    this.counters.totalRequests = 0
    this.counters.successfulRequests = 0
  }
}
</script>

<style scoped>
.card {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.badge {
  font-size: 0.75em;
}

.list-group-item {
  border-left: 4px solid transparent;
}

.list-group-item:has(.bg-success) {
  border-left-color: #28a745;
}

.list-group-item:has(.bg-danger) {
  border-left-color: #dc3545;
}
</style>
