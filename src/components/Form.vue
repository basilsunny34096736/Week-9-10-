<template>
  <div class="container mt-5">
<<<<<<< HEAD
    <div class="row">
      <div class="col-md-8 offset-md-2">
        <h1 class="text-center">User Information Form</h1>
        <form @submit.prevent="submitForm">
          <div class="row mb-3">
            <div class="col-md-6">
              <label for="username" class="form-label">Username</label>
              <input
                type="text"
                class="form-control"
                id="username"
                @blur="() => validateName(true)"
                @input="() => validateName(false)"
                v-model="formData.username"
              />
              <div v-if="errors.username" class="text-danger">{{ errors.username }}</div>
            </div>
            <div class="col-md-6">
              <label for="password" class="form-label">Password</label>
              <input
                type="password"
                class="form-control"
                id="password"
                @blur="() => validatePassword(true)"
                @input="() => validatePassword(false)"
                v-model="formData.password"
              />
              <div v-if="errors.password" class="text-danger">{{ errors.password }}</div>
            </div>
          </div>

          <div class="row mb-3">
            <div class="col-md-6">
              <div class="form-check">
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="isAustralian"
                  v-model="formData.isAustralian"
                />
                <label class="form-check-label" for="isAustralian">Australian Resident?</label>
              </div>
            </div>
            <div class="col-md-6">
              <label for="gender" class="form-label">Gender</label>
              <select class="form-select" id="gender" v-model="formData.gender">
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          <div class="mb-3">
            <label for="reason" class="form-label">Reason for joining</label>
            <textarea
              class="form-control"
              id="reason"
=======
    <div class="row justify-content-center">
      <div class="col-12">
        <h1 class="text-center text-primary mb-4">User Information Form</h1>
        <form @submit.prevent="submitForm">
          <div class="mb-3">
            <label for="username" class="form-label">Username:</label>
            <input
              type="text"
              id="username"
              class="form-control"
              v-model="formData.username"
              required
            />
          </div>
          <div class="mb-3">
            <label for="password" class="form-label">Password:</label>
            <input
              type="password"
              id="password"
              class="form-control"
              v-model="formData.password"
              required
            />
          </div>
          <div class="form-check mb-3">
            <input
              type="checkbox"
              id="isAustralian"
              class="form-check-input"
              v-model="formData.isAustralian"
            />
            <label for="isAustralian" class="form-check-label">Australian Resident?</label>
          </div>
          <div class="mb-3">
            <label for="gender" class="form-label">Gender</label>
            <select id="gender" class="form-select" v-model="formData.gender" required>
              <option value="" disabled selected>Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div class="mb-3">
            <label for="reason" class="form-label">Reason for joining</label>
            <textarea
              id="reason"
              class="form-control"
>>>>>>> 0a2999c (first commit)
              rows="3"
              v-model="formData.reason"
            ></textarea>
          </div>
<<<<<<< HEAD

          <div class="text-center">
            <button type="submit" class="btn btn-primary me-2">Submit</button>
            <button type="button" class="btn btn-secondary" @click="clearForm">Clear</button>
          </div>
        </form>

        <!-- Submitted Cards Section -->
        <div class="row mt-5" v-if="submittedCards.length">
          <div class="d-flex flex-wrap justify-content-start">
            <div
              v-for="(card, index) in submittedCards"
              :key="index"
              class="card m-2"
              style="width: 18rem"
            >
              <div class="card-header">User Information</div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">Username: {{ card.username }}</li>
                <li class="list-group-item">Password: {{ card.password }}</li>
                <li class="list-group-item">
                  Australian Resident: {{ card.isAustralian ? 'Yes' : 'No' }}
                </li>
                <li class="list-group-item">Gender: {{ card.gender }}</li>
                <li class="list-group-item">Reason: {{ card.reason }}</li>
              </ul>
            </div>
          </div>
=======
          <div class="d-grid gap-2 d-md-flex justify-content-md-center mt-4">
            <button type="submit" class="btn btn-primary btn-lg">Submit</button>
            <button type="button" class="btn btn-secondary btn-lg" @click="clearForm">Clear</button>
          </div>
        </form>
      </div>
    </div>
    <div class="row mt-5" v-if="submittedCards.length">
      <div class="col-12 d-flex flex-wrap justify-content-center justify-content-md-start">
        <div v-for="(card, index) in submittedCards" :key="index" class="card shadow-sm m-2">
          <div class="card-header bg-primary text-white">User Information</div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item"><strong>Username:</strong> {{ card.username }}</li>
            <li class="list-group-item"><strong>Password:</strong> {{ card.password }}</li>
            <li class="list-group-item">
              <strong>Australian Resident:</strong> {{ card.isAustralian ? 'Yes' : 'No' }}
            </li>
            <li class="list-group-item"><strong>Gender:</strong> {{ card.gender }}</li>
            <li class="list-group-item"><strong>Reason:</strong> {{ card.reason }}</li>
          </ul>
>>>>>>> 0a2999c (first commit)
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const formData = ref({
  username: '',
  password: '',
  isAustralian: false,
  reason: '',
  gender: '',
})

const submittedCards = ref([])

<<<<<<< HEAD
const submitForm = () => {
  validateName(true)
  if (!errors.value.username && !errors.value.password) {
    submittedCards.value.push({ ...formData.value })
    clearForm()
  }
}

const clearForm = () => {
  formData.value = {
    username: '',
    password: '',
    isAustralian: false,
    reason: '',
    gender: '',
  }
}

const errors = ref({
  username: null,
  password: null,
  resident: null,
  gender: null,
  reason: null,
})

const validateName = (blur) => {
  if (formData.value.username.length < 3) {
    if (blur) errors.value.username = 'Name must be at least 3 charaters'
  } else {
    errors.value.username = null
  }
}

const validatePassword = (blur) => {
  const password = formData.value.password
  const minLength = 8
  const hasUppercase = /[A-Z]/.test(password)
  const hasLowercase = /[a-z]/.test(password)
  const hasNumber = /\d/.test(password)
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password)

  if (password.length < minLength) {
    if (blur) errors.value.password = 'Password must be at least ' + minLength + ' characters long.'
  } else if (!hasUppercase) {
    if (blur) errors.value.password = 'Password must contain at least one uppercase letter.'
  } else if (!hasLowercase) {
    if (blur) errors.value.password = 'Password must contain at least one lowercase letter.'
  } else if (!hasNumber) {
    if (blur) errors.value.password = 'Password must contain at least one number.'
  } else if (!hasSpecialChar) {
    if (blur) errors.value.password = 'Password must contain at least one special character.'
  } else {
    errors.value.password = null
  }
=======
function submitForm() {
  submittedCards.value.push({ ...formData.value })
  clearForm()
}

function clearForm() {
  formData.value.username = ''
  formData.value.password = ''
  formData.value.isAustralian = false
  formData.value.reason = ''
  formData.value.gender = ''
>>>>>>> 0a2999c (first commit)
}
</script>

<style scoped>
<<<<<<< HEAD
.card {
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
.card-header {
  background-color: #275fda;
  color: white;
  padding: 10px;
  border-radius: 10px 10px 0 0;
}
.list-group-item {
  padding: 10px;
=======
.container {
  padding-right: 0;
  padding-left: 0;
}
.row {
  margin-right: 0;
  margin-left: 0;
}
.card {
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
}
.card-header {
  background-color: #007bff;
  color: white;
  padding: 1rem;
  border-radius: 10px 10px 0 0;
  font-weight: bold;
}
.list-group-item {
  padding: 1rem;
}
.form-label {
  font-weight: 500;
}
@media (min-width: 768px) {
  .card {
    width: auto;
    max-width: none;
  }
>>>>>>> 0a2999c (first commit)
}
</style>
