<template>
  <div class="container mt-4">
    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-header">
            <h4>Add New Book</h4>
          </div>
          <div class="card-body">
            <form @submit.prevent="handleAddBook">
              <div class="row">
                <div class="col-md-6">
                  <div class="mb-3">
                    <label for="title" class="form-label">Book Title *</label>
                    <input
                      type="text"
                      class="form-control"
                      id="title"
                      v-model="bookForm.title"
                      required
                      placeholder="Enter book title"
                    >
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="mb-3">
                    <label for="author" class="form-label">Author *</label>
                    <input
                      type="text"
                      class="form-control"
                      id="author"
                      v-model="bookForm.author"
                      required
                      placeholder="Enter author name"
                    >
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-md-6">
                  <div class="mb-3">
                    <label for="isbn" class="form-label">ISBN</label>
                    <input
                      type="text"
                      class="form-control"
                      id="isbn"
                      v-model="bookForm.isbn"
                      placeholder="Enter ISBN (optional)"
                    >
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="mb-3">
                    <label for="category" class="form-label">Category *</label>
                    <select class="form-select" id="category" v-model="bookForm.category" required>
                      <option value="">Select category</option>
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
                </div>
              </div>

              <div class="row">
                <div class="col-md-6">
                  <div class="mb-3">
                    <label for="price" class="form-label">Price ($)</label>
                    <input
                      type="number"
                      class="form-control"
                      id="price"
                      v-model="bookForm.price"
                      step="0.01"
                      min="0"
                      placeholder="Enter price"
                    >
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="mb-3">
                    <label for="pages" class="form-label">Number of Pages</label>
                    <input
                      type="number"
                      class="form-control"
                      id="pages"
                      v-model="bookForm.pages"
                      min="1"
                      placeholder="Enter number of pages"
                    >
                  </div>
                </div>
              </div>

              <div class="mb-3">
                <label for="description" class="form-label">Description</label>
                <textarea
                  class="form-control"
                  id="description"
                  v-model="bookForm.description"
                  rows="3"
                  placeholder="Enter book description"
                ></textarea>
              </div>

              <div class="mb-3">
                <label for="publicationYear" class="form-label">Publication Year</label>
                <input
                  type="number"
                  class="form-control"
                  id="publicationYear"
                  v-model="bookForm.publicationYear"
                  min="1000"
                  max="2024"
                  placeholder="Enter publication year"
                >
              </div>

              <div class="d-flex gap-2">
                <button type="submit" class="btn btn-primary" :disabled="loading">
                  <span v-if="loading" class="spinner-border spinner-border-sm me-2"></span>
                  Add Book
                </button>
                <button type="button" class="btn btn-secondary" @click="resetForm">
                  Reset Form
                </button>
              </div>
            </form>

            <!-- Alert Messages -->
            <div v-if="message" class="alert mt-3" :class="messageType">
              {{ message }}
            </div>

            <!-- Success Message -->
            <div v-if="successMessage" class="alert alert-success mt-3">
              <h6>Book Added Successfully!</h6>
              <p><strong>Book ID:</strong> {{ successMessage.bookId }}</p>
              <p><strong>Title:</strong> {{ successMessage.title }}</p>
              <p><strong>Author:</strong> {{ successMessage.author }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { addBook } from '../firebase/bookService.js'

// Reactive data
const loading = ref(false)
const message = ref('')
const messageType = ref('')
const successMessage = ref(null)

// Form data
const bookForm = ref({
  title: '',
  author: '',
  isbn: '',
  category: '',
  price: '',
  pages: '',
  description: '',
  publicationYear: ''
})

// Handle form submission
const handleAddBook = async () => {
  loading.value = true
  message.value = ''
  successMessage.value = null

  try {
    // Validate required fields
    if (!bookForm.value.title || !bookForm.value.author || !bookForm.value.category) {
      message.value = 'Please fill in all required fields (Title, Author, Category)'
      messageType.value = 'alert-danger'
      return
    }

    // Prepare book data
    const bookData = {
      title: bookForm.value.title,
      author: bookForm.value.author,
      isbn: bookForm.value.isbn || null,
      category: bookForm.value.category,
      price: bookForm.value.price ? parseFloat(bookForm.value.price) : null,
      pages: bookForm.value.pages ? parseInt(bookForm.value.pages) : null,
      description: bookForm.value.description || null,
      publicationYear: bookForm.value.publicationYear ? parseInt(bookForm.value.publicationYear) : null,
      createdAt: new Date(),
      updatedAt: new Date()
    }

    // Add book to Firestore
    const result = await addBook(bookData)

    if (result.success) {
      successMessage.value = {
        bookId: result.bookId,
        title: bookData.title,
        author: bookData.author
      }
      message.value = 'Book added successfully to Firestore!'
      messageType.value = 'alert-success'
      resetForm()
    } else {
      message.value = `Error adding book: ${result.error}`
      messageType.value = 'alert-danger'
    }
  } catch (error) {
    message.value = `Error: ${error.message}`
    messageType.value = 'alert-danger'
  } finally {
    loading.value = false
  }
}

// Reset form
const resetForm = () => {
  bookForm.value = {
    title: '',
    author: '',
    isbn: '',
    category: '',
    price: '',
    pages: '',
    description: '',
    publicationYear: ''
  }
  message.value = ''
  successMessage.value = null
}
</script>

<style scoped>
.spinner-border-sm {
  width: 1rem;
  height: 1rem;
}

.form-label {
  font-weight: 600;
}

.alert {
  border-radius: 0.375rem;
}
</style>
