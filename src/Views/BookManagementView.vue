<template>
  <div class="container mt-4">
    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-header">
            <h4>Book Management - Firestore Operations</h4>
          </div>
          <div class="card-body">
            
            <!-- Query Operations Section -->
            <div class="mb-4">
              <h5>Firestore Queries (Task 8.2)</h5>
              <div class="row">
                <div class="col-md-6">
                  <div class="mb-3">
                    <label class="form-label">Query by Category</label>
                    <div class="input-group">
                      <select class="form-select" v-model="queryCategory">
                        <option value="">Select category</option>
                        <option value="Fiction">Fiction</option>
                        <option value="Non-Fiction">Non-Fiction</option>
                        <option value="Science">Science</option>
                        <option value="Technology">Technology</option>
                        <option value="History">History</option>
                        <option value="Biography">Biography</option>
                        <option value="Education">Education</option>
                      </select>
                      <button class="btn btn-outline-primary" @click="queryByCategory">
                        Query
                      </button>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="mb-3">
                    <label class="form-label">Query by Author</label>
                    <div class="input-group">
                      <input type="text" class="form-control" v-model="queryAuthor" placeholder="Enter author name">
                      <button class="btn btn-outline-primary" @click="queryByAuthor">
                        Query
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              
              <div class="row">
                <div class="col-md-4">
                  <div class="mb-3">
                    <label class="form-label">Order by Title</label>
                    <div class="input-group">
                      <input type="number" class="form-control" v-model="limitCount" placeholder="Limit" min="1" max="50">
                      <button class="btn btn-outline-primary" @click="queryOrderedByTitle">
                        Query
                      </button>
                    </div>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="mb-3">
                    <label class="form-label">Order by Year (Newest)</label>
                    <div class="input-group">
                      <input type="number" class="form-control" v-model="limitCount" placeholder="Limit" min="1" max="50">
                      <button class="btn btn-outline-primary" @click="queryOrderedByYear">
                        Query
                      </button>
                    </div>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="mb-3">
                    <label class="form-label">Price Range</label>
                    <div class="input-group">
                      <input type="number" class="form-control" v-model="minPrice" placeholder="Min" step="0.01">
                      <input type="number" class="form-control" v-model="maxPrice" placeholder="Max" step="0.01">
                      <button class="btn btn-outline-primary" @click="queryByPriceRange">
                        Query
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Books Table -->
            <div class="table-responsive">
              <table class="table table-striped">
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Category</th>
                    <th>Price</th>
                    <th>Year</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="book in books" :key="book.id">
                    <td>{{ book.title }}</td>
                    <td>{{ book.author }}</td>
                    <td>
                      <span class="badge bg-secondary">{{ book.category }}</span>
                    </td>
                    <td>${{ book.price || 'N/A' }}</td>
                    <td>{{ book.publicationYear || 'N/A' }}</td>
                    <td>
                      <button class="btn btn-sm btn-warning me-1" @click="editBook(book)">
                        Edit
                      </button>
                      <button class="btn btn-sm btn-danger" @click="deleteBook(book.id)">
                        Delete
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <!-- Edit Book Modal -->
            <div v-if="editingBook" class="modal show d-block" tabindex="-1">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title">Edit Book</h5>
                    <button type="button" class="btn-close" @click="cancelEdit"></button>
                  </div>
                  <div class="modal-body">
                    <form @submit.prevent="updateBook">
                      <div class="mb-3">
                        <label class="form-label">Title</label>
                        <input type="text" class="form-control" v-model="editingBook.title" required>
                      </div>
                      <div class="mb-3">
                        <label class="form-label">Author</label>
                        <input type="text" class="form-control" v-model="editingBook.author" required>
                      </div>
                      <div class="mb-3">
                        <label class="form-label">Category</label>
                        <select class="form-select" v-model="editingBook.category" required>
                          <option value="Fiction">Fiction</option>
                          <option value="Non-Fiction">Non-Fiction</option>
                          <option value="Science">Science</option>
                          <option value="Technology">Technology</option>
                          <option value="History">History</option>
                          <option value="Biography">Biography</option>
                          <option value="Education">Education</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                      <div class="mb-3">
                        <label class="form-label">Price ($)</label>
                        <input type="number" class="form-control" v-model="editingBook.price" step="0.01">
                      </div>
                      <div class="mb-3">
                        <label class="form-label">Publication Year</label>
                        <input type="number" class="form-control" v-model="editingBook.publicationYear">
                      </div>
                    </form>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" @click="cancelEdit">Cancel</button>
                    <button type="button" class="btn btn-primary" @click="updateBook" :disabled="loading">
                      <span v-if="loading" class="spinner-border spinner-border-sm me-2"></span>
                      Update Book
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <!-- Alert Messages -->
            <div v-if="message" class="alert mt-3" :class="messageType">
              {{ message }}
            </div>

            <!-- Loading State -->
            <div v-if="loading" class="text-center mt-3">
              <div class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { 
  getAllBooks, 
  updateBook as updateBookService, 
  deleteBook as deleteBookService,
  getBooksByCategory,
  getBooksByAuthor,
  getBooksOrderedByTitle,
  getBooksOrderedByYear,
  getBooksByPriceRange
} from '../firebase/bookService.js'

// Reactive data
const books = ref([])
const loading = ref(false)
const message = ref('')
const messageType = ref('')
const editingBook = ref(null)

// Query parameters
const queryCategory = ref('')
const queryAuthor = ref('')
const limitCount = ref(10)
const minPrice = ref('')
const maxPrice = ref('')

// Load all books on component mount
onMounted(async () => {
  await loadBooks()
})

// Load all books
const loadBooks = async () => {
  loading.value = true
  try {
    const result = await getAllBooks()
    if (result.success) {
      books.value = result.books
    } else {
      message.value = `Error loading books: ${result.error}`
      messageType.value = 'alert-danger'
    }
  } catch (error) {
    message.value = `Error: ${error.message}`
    messageType.value = 'alert-danger'
  } finally {
    loading.value = false
  }
}

// Query by category
const queryByCategory = async () => {
  if (!queryCategory.value) return
  
  loading.value = true
  try {
    const result = await getBooksByCategory(queryCategory.value)
    if (result.success) {
      books.value = result.books
      message.value = `Found ${result.books.length} books in category: ${queryCategory.value}`
      messageType.value = 'alert-info'
    } else {
      message.value = `Error: ${result.error}`
      messageType.value = 'alert-danger'
    }
  } catch (error) {
    message.value = `Error: ${error.message}`
    messageType.value = 'alert-danger'
  } finally {
    loading.value = false
  }
}

// Query by author
const queryByAuthor = async () => {
  if (!queryAuthor.value) return
  
  loading.value = true
  try {
    const result = await getBooksByAuthor(queryAuthor.value)
    if (result.success) {
      books.value = result.books
      message.value = `Found ${result.books.length} books by author: ${queryAuthor.value}`
      messageType.value = 'alert-info'
    } else {
      message.value = `Error: ${result.error}`
      messageType.value = 'alert-danger'
    }
  } catch (error) {
    message.value = `Error: ${error.message}`
    messageType.value = 'alert-danger'
  } finally {
    loading.value = false
  }
}

// Query ordered by title
const queryOrderedByTitle = async () => {
  loading.value = true
  try {
    const result = await getBooksOrderedByTitle(limitCount.value || 10)
    if (result.success) {
      books.value = result.books
      message.value = `Found ${result.books.length} books ordered by title`
      messageType.value = 'alert-info'
    } else {
      message.value = `Error: ${result.error}`
      messageType.value = 'alert-danger'
    }
  } catch (error) {
    message.value = `Error: ${error.message}`
    messageType.value = 'alert-danger'
  } finally {
    loading.value = false
  }
}

// Query ordered by year
const queryOrderedByYear = async () => {
  loading.value = true
  try {
    const result = await getBooksOrderedByYear(limitCount.value || 10)
    if (result.success) {
      books.value = result.books
      message.value = `Found ${result.books.length} books ordered by year (newest first)`
      messageType.value = 'alert-info'
    } else {
      message.value = `Error: ${result.error}`
      messageType.value = 'alert-danger'
    }
  } catch (error) {
    message.value = `Error: ${error.message}`
    messageType.value = 'alert-danger'
  } finally {
    loading.value = false
  }
}

// Query by price range
const queryByPriceRange = async () => {
  if (!minPrice.value || !maxPrice.value) return
  
  loading.value = true
  try {
    const result = await getBooksByPriceRange(parseFloat(minPrice.value), parseFloat(maxPrice.value))
    if (result.success) {
      books.value = result.books
      message.value = `Found ${result.books.length} books in price range $${minPrice.value} - $${maxPrice.value}`
      messageType.value = 'alert-info'
    } else {
      message.value = `Error: ${result.error}`
      messageType.value = 'alert-danger'
    }
  } catch (error) {
    message.value = `Error: ${error.message}`
    messageType.value = 'alert-danger'
  } finally {
    loading.value = false
  }
}

// Edit book
const editBook = (book) => {
  editingBook.value = { ...book }
}

// Cancel edit
const cancelEdit = () => {
  editingBook.value = null
}

// Update book
const updateBook = async () => {
  if (!editingBook.value) return
  
  loading.value = true
  try {
    const result = await updateBookService(editingBook.value.id, {
      title: editingBook.value.title,
      author: editingBook.value.author,
      category: editingBook.value.category,
      price: editingBook.value.price ? parseFloat(editingBook.value.price) : null,
      publicationYear: editingBook.value.publicationYear ? parseInt(editingBook.value.publicationYear) : null
    })
    
    if (result.success) {
      message.value = 'Book updated successfully!'
      messageType.value = 'alert-success'
      editingBook.value = null
      await loadBooks()
    } else {
      message.value = `Error updating book: ${result.error}`
      messageType.value = 'alert-danger'
    }
  } catch (error) {
    message.value = `Error: ${error.message}`
    messageType.value = 'alert-danger'
  } finally {
    loading.value = false
  }
}

// Delete book
const deleteBook = async (bookId) => {
  if (!confirm('Are you sure you want to delete this book?')) return
  
  loading.value = true
  try {
    const result = await deleteBookService(bookId)
    if (result.success) {
      message.value = 'Book deleted successfully!'
      messageType.value = 'alert-success'
      await loadBooks()
    } else {
      message.value = `Error deleting book: ${result.error}`
      messageType.value = 'alert-danger'
    }
  } catch (error) {
    message.value = `Error: ${error.message}`
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

.modal {
  background-color: rgba(0, 0, 0, 0.5);
}

.badge {
  font-size: 0.8em;
}

.table th {
  background-color: #f8f9fa;
  font-weight: 600;
}
</style>
