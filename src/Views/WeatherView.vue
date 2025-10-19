<template>
  <div class="container mt-4">
    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-header">
            <h4 class="mb-0">Weather API - EFOLIO Task 10</h4>
          </div>
          <div class="card-body">
            
            <!-- Current Location Weather - Task 10.1 -->
            <div class="row mb-4">
              <div class="col-12">
                <h5>Current Location Weather</h5>
                <div class="alert alert-info mb-3">
                  <strong>Note:</strong> This feature requires location access. If prompted, please allow location access in your browser. 
                  If location access is denied, you can still search for weather by city name below.
                </div>
                <div class="btn-group" role="group">
                  <button 
                    @click="getCurrentLocationWeather" 
                    class="btn btn-primary"
                    :disabled="loading"
                  >
                    <span v-if="loading" class="spinner-border spinner-border-sm me-2"></span>
                    Get Current Location Weather
                  </button>
                  <button 
                    @click="getMelbourneWeather" 
                    class="btn btn-outline-primary"
                    :disabled="loading"
                  >
                    <span v-if="loading" class="spinner-border spinner-border-sm me-2"></span>
                    Use Melbourne as Default
                  </button>
                </div>
                
                <div v-if="currentWeather" class="mt-3">
                  <div class="card">
                    <div class="card-body">
                      <div class="row align-items-center">
                        <div class="col-md-8">
                          <h3>{{ currentWeather.city }}, {{ currentWeather.country }}</h3>
                          <div class="d-flex align-items-center">
                            <img 
                              :src="weatherService.getWeatherIconUrl(currentWeather.icon)" 
                              :alt="currentWeather.description"
                              class="me-3"
                              style="width: 80px; height: 80px;"
                            >
                            <div>
                              <h2 class="mb-0">{{ currentWeather.temperature }}°C</h2>
                              <p class="mb-0 text-capitalize">{{ currentWeather.description }}</p>
                              <small class="text-muted">Feels like {{ currentWeather.feelsLike }}°C</small>
                            </div>
                          </div>
                        </div>
                        <div class="col-md-4">
                          <div class="row text-center">
                            <div class="col-6 mb-2">
                              <div class="border rounded p-2">
                                <small class="text-muted">Humidity</small>
                                <div class="fw-bold">{{ currentWeather.humidity }}%</div>
                              </div>
                            </div>
                            <div class="col-6 mb-2">
                              <div class="border rounded p-2">
                                <small class="text-muted">Wind Speed</small>
                                <div class="fw-bold">{{ currentWeather.windSpeed }} m/s</div>
                              </div>
                            </div>
                            <div class="col-6">
                              <div class="border rounded p-2">
                                <small class="text-muted">Pressure</small>
                                <div class="fw-bold">{{ currentWeather.pressure }} hPa</div>
                              </div>
                            </div>
                            <div class="col-6">
                              <div class="border rounded p-2">
                                <small class="text-muted">Coordinates</small>
                                <div class="fw-bold small">{{ coordinates.lat }}, {{ coordinates.lon }}</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- City Search Weather - Task 10.2 -->
            <div class="row mb-4">
              <div class="col-12">
                <h5>Search Weather by City</h5>
                <div class="input-group mb-3">
                  <input 
                    type="text" 
                    class="form-control" 
                    v-model="citySearch"
                    placeholder="Enter city name (e.g., Clayton, AU)"
                    @keyup.enter="searchWeatherByCity"
                  >
                  <button 
                    @click="searchWeatherByCity" 
                    class="btn btn-success"
                    :disabled="loading || !citySearch.trim()"
                  >
                    <span v-if="loading" class="spinner-border spinner-border-sm me-2"></span>
                    Search Weather
                  </button>
                </div>
                
                <div v-if="searchedWeather" class="mt-3">
                  <div class="card">
                    <div class="card-body">
                      <div class="row align-items-center">
                        <div class="col-md-8">
                          <h3>{{ searchedWeather.city }}, {{ searchedWeather.country }}</h3>
                          <div class="d-flex align-items-center">
                            <img 
                              :src="weatherService.getWeatherIconUrl(searchedWeather.icon)" 
                              :alt="searchedWeather.description"
                              class="me-3"
                              style="width: 80px; height: 80px;"
                            >
                            <div>
                              <h2 class="mb-0">{{ searchedWeather.temperature }}°C</h2>
                              <p class="mb-0 text-capitalize">{{ searchedWeather.description }}</p>
                              <small class="text-muted">Feels like {{ searchedWeather.feelsLike }}°C</small>
                            </div>
                          </div>
                        </div>
                        <div class="col-md-4">
                          <div class="row text-center">
                            <div class="col-6 mb-2">
                              <div class="border rounded p-2">
                                <small class="text-muted">Humidity</small>
                                <div class="fw-bold">{{ searchedWeather.humidity }}%</div>
                              </div>
                            </div>
                            <div class="col-6 mb-2">
                              <div class="border rounded p-2">
                                <small class="text-muted">Wind Speed</small>
                                <div class="fw-bold">{{ searchedWeather.windSpeed }} m/s</div>
                              </div>
                            </div>
                            <div class="col-6">
                              <div class="border rounded p-2">
                                <small class="text-muted">Pressure</small>
                                <div class="fw-bold">{{ searchedWeather.pressure }} hPa</div>
                              </div>
                            </div>
                            <div class="col-6">
                              <div class="border rounded p-2">
                                <small class="text-muted">Search Term</small>
                                <div class="fw-bold small">{{ citySearch }}</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Error Messages -->
            <div v-if="error" class="alert alert-danger">
              <strong>Error:</strong> {{ error }}
            </div>

            <!-- Loading State -->
            <div v-if="loading" class="text-center">
              <div class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
              <p class="mt-2">Fetching weather data...</p>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { weatherService } from '../services/weatherService.js'

export default {
  name: 'WeatherView',
  data() {
    return {
      weatherService,
      loading: false,
      error: null,
      currentWeather: null,
      searchedWeather: null,
      citySearch: '',
      coordinates: {
        lat: null,
        lon: null
      }
    }
  },
  methods: {
    async getCurrentLocationWeather() {
      this.loading = true
      this.error = null
      
      try {
        // Check if geolocation is supported
        if (!navigator.geolocation) {
          throw new Error('Geolocation is not supported by this browser.')
        }

        // Get current location with better error handling
        const coords = await this.weatherService.getCurrentLocation()
        this.coordinates = coords
        
        // Get weather for current location
        const result = await this.weatherService.getCurrentLocationWeather(coords.lat, coords.lon)
        
        if (result.success) {
          this.currentWeather = result.data
        } else {
          this.error = result.error
        }
      } catch (error) {
        console.error('Geolocation error:', error)
        this.error = `Geolocation error: ${error.message}. Please try searching by city instead, or allow location access in your browser settings.`
        
        // Provide a fallback suggestion
        setTimeout(() => {
          if (this.error.includes('Geolocation error')) {
            this.error += ' You can also search for weather by city name using the search box below.'
          }
        }, 2000)
      } finally {
        this.loading = false
      }
    },
    
    async getMelbourneWeather() {
      this.loading = true
      this.error = null
      
      try {
        // Use Melbourne coordinates as fallback
        this.coordinates = { lat: -37.8136, lon: 144.9631 }
        
        // Get weather for Melbourne
        const result = await this.weatherService.getCurrentLocationWeather(-37.8136, 144.9631)
        
        if (result.success) {
          this.currentWeather = result.data
        } else {
          this.error = result.error
        }
      } catch (error) {
        this.error = error.message
      } finally {
        this.loading = false
      }
    },
    
    async searchWeatherByCity() {
      if (!this.citySearch.trim()) return
      
      this.loading = true
      this.error = null
      
      try {
        const result = await this.weatherService.getWeatherByCity(this.citySearch)
        
        if (result.success) {
          this.searchedWeather = result.data
        } else {
          this.error = result.error
        }
      } catch (error) {
        this.error = error.message
      } finally {
        this.loading = false
      }
    }
  }
}
</script>

<style scoped>
.card {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.border {
  border-color: #dee2e6 !important;
}

.fw-bold {
  font-weight: 600 !important;
}
</style>
