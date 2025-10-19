<template>
  <div class="container mt-4">
    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-header d-flex justify-content-between align-items-center">
            <h4 class="mb-0">GetAllBookAPI - EFOLIO Task 10.2</h4>
            <div>
              <button 
                @click="refreshBooks" 
                class="btn btn-primary btn-sm"
                :disabled="loading"
              >
                <span v-if="loading" class="spinner-border spinner-border-sm me-2"></span>
                Refresh
              </button>
              <button 
                @click="copyToClipboard" 
                class="btn btn-success btn-sm ms-2"
                v-if="books.length > 0"
              >
                Copy JSON
              </button>
            </div>
          </div>
          <div class="card-body">
            
            <!-- Book Count and Status -->
            <div class="row mb-4">
              <div class="col-md-6">
                <div class="alert alert-info">
                  <h6 class="alert-heading">API Status</h6>
                  <p class="mb-0">
                    <strong>Total Books:</strong> {{ books.length }}<br>
                    <strong>Last Updated:</strong> {{ lastUpdated || 'Never' }}<br>
                    <strong>API Endpoint:</strong> /api/books
                  </p>
                </div>
              </div>
              <div class="col-md-6">
                <div class="alert alert-success">
                  <h6 class="alert-heading">JSON Format</h6>
                  <p class="mb-0">
                    <strong>Content-Type:</strong> application/json<br>
                    <strong>Encoding:</strong> UTF-8<br>
                    <strong>Status:</strong> {{ loading ? 'Loading...' : 'Ready' }}
                  </p>
                </div>
              </div>
            </div>

            <!-- JSON Display -->
            <div v-if="books.length > 0" class="row">
              <div class="col-12">
                <h5>Books Data (JSON Format)</h5>
                <div class="position-relative">
                  <pre class="bg-light p-3 rounded" style="max-height: 500px; overflow-y: auto;"><code>{{ formattedJson }}</code></pre>
                  <div class="position-absolute top-0 end-0 p-2">
                    <span class="badge bg-secondary">{{ books.length }} books</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Empty State -->
            <div v-else-if="!loading" class="text-center py-5">
              <div class="mb-4">
                <i class="fas fa-book fa-3x text-muted"></i>
              </div>
              <h5 class="text-muted">No Books Found</h5>
              <p class="text-muted">Add some books to see them in JSON format here.</p>
              <router-link to="/add-book" class="btn btn-primary">
                Add Your First Book
              </router-link>
            </div>

            <!-- Loading State -->
            <div v-if="loading" class="text-center py-5">
              <div class="spinner-border text-primary" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
              <p class="mt-3">Loading books data...</p>
            </div>

            <!-- Error State -->
            <div v-if="error" class="alert alert-danger">
              <h6 class="alert-heading">Error Loading Books</h6>
              <p class="mb-0">{{ error }}</p>
              <button @click="refreshBooks" class="btn btn-outline-danger btn-sm mt-2">
                Try Again
              </button>
            </div>

            <!-- Raw JSON Download -->
            <div v-if="books.length > 0" class="row mt-4">
              <div class="col-12">
                <h5>Export Options</h5>
                <div class="btn-group" role="group">
                  <button @click="downloadJson" class="btn btn-outline-primary">
                    <i class="fas fa-download me-2"></i>Download JSON
                  </button>
                  <button @click="viewRawJson" class="btn btn-outline-secondary">
                    <i class="fas fa-code me-2"></i>View Raw JSON
                  </button>
                  <button @click="copyToClipboard" class="btn btn-outline-success">
                    <i class="fas fa-copy me-2"></i>Copy to Clipboard
                  </button>
                </div>
              </div>
            </div>

            <!-- Raw JSON Modal -->
            <div class="modal fade" id="rawJsonModal" tabindex="-1">
              <div class="modal-dialog modal-xl">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title">Raw JSON Data</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                  </div>
                  <div class="modal-body">
                    <pre class="bg-light p-3 rounded" style="max-height: 400px; overflow-y: auto;"><code>{{ rawJson }}</code></pre>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button @click="copyToClipboard" class="btn btn-primary">Copy to Clipboard</button>
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
import { getAllBooks } from '../firebase/bookService.js'

export default {
  name: 'GetAllBookApiView',
  data() {
    return {
      books: [],
      loading: false,
      error: null,
      lastUpdated: null
    }
  },
  computed: {
    formattedJson() {
      return JSON.stringify(this.books, null, 2)
    },
    rawJson() {
      return JSON.stringify(this.books)
    }
  },
  methods: {
    async refreshBooks() {
      this.loading = true
      this.error = null
      
      try {
        const books = await getAllBooks()
        this.books = books
        this.lastUpdated = new Date().toLocaleString()
      } catch (error) {
        this.error = error.message
        console.error('Error loading books:', error)
      } finally {
        this.loading = false
      }
    },
    
    async copyToClipboard() {
      try {
        await navigator.clipboard.writeText(this.formattedJson)
        // Show success message (you could use a toast notification here)
        alert('JSON copied to clipboard!')
      } catch (error) {
        console.error('Failed to copy to clipboard:', error)
        alert('Failed to copy to clipboard. Please try again.')
      }
    },
    
    downloadJson() {
      const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(this.formattedJson)
      const downloadAnchorNode = document.createElement('a')
      downloadAnchorNode.setAttribute("href", dataStr)
      downloadAnchorNode.setAttribute("download", "books.json")
      document.body.appendChild(downloadAnchorNode)
      downloadAnchorNode.click()
      downloadAnchorNode.remove()
    },
    
    viewRawJson() {
      // Bootstrap modal will be shown
      const modal = new bootstrap.Modal(document.getElementById('rawJsonModal'))
      modal.show()
    }
  },
  
  async mounted() {
    await this.refreshBooks()
  }
}
</script>

<style scoped>
.card {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

pre {
  font-family: 'Courier New', monospace;
  font-size: 0.9em;
  line-height: 1.4;
}

.badge {
  font-size: 0.75em;
}

.alert {
  border-left: 4px solid;
}

.alert-info {
  border-left-color: #17a2b8;
}

.alert-success {
  border-left-color: #28a745;
}

.alert-danger {
  border-left-color: #dc3545;
}

.btn-group .btn {
  border-radius: 0.375rem;
}

.btn-group .btn:not(:last-child) {
  margin-right: 0.25rem;
}
</style>
