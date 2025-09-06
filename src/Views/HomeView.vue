<script setup>
import { ref, computed } from 'vue'

defineOptions({ name: 'LibraryFormW5' })

// form state
const state = ref({
  username: '',
  gender: '',
  password: '',
  confirm: '',
  australianResident: false,
  reason: '',
  suburb: 'Clayton'
})

// validation errors
const formErrors = ref({
  username: null,
  password: null,
  confirm: null,
  reason: null
})

// submitted entries
const records = ref([])

// positive note if "friend" is in reason
const reasonNote = computed(() =>
  state.value.reason.toLowerCase().includes('friend')
    ? 'Great to have you my friend'
    : ''
)

// validators
const checkUsername = (blur) => {
  formErrors.value.username =
    !state.value.username.trim() && blur ? 'Username is required.' : null
}

const checkPassword = (blur) => {
  formErrors.value.password =
    !state.value.password && blur ? 'Password is required.' : null
  checkConfirm(blur)
}

const checkConfirm = (blur) => {
  if (!state.value.confirm && blur) {
    formErrors.value.confirm = 'Please confirm your password.'
  } else if (state.value.password !== state.value.confirm) {
    formErrors.value.confirm = blur ? 'Passwords do not match.' : null
  } else {
    formErrors.value.confirm = null
  }
}

const checkReason = (blur) => {
  const minLength = 10
  formErrors.value.reason =
    state.value.reason.trim().length < minLength && blur
      ? `Reason must be at least ${minLength} characters`
      : null
}

// actions
const handleSubmit = () => {
  checkUsername(true)
  checkPassword(true)
  checkConfirm(true)
  checkReason(true)

  if (
    !formErrors.value.username &&
    !formErrors.value.password &&
    !formErrors.value.confirm &&
    !formErrors.value.reason
  ) {
    const hiddenPassword = '•'.repeat(Math.min(state.value.password.length, 12))
    records.value.push({
      username: state.value.username,
      password: hiddenPassword,
      resident: state.value.australianResident,
      gender: state.value.gender,
      reason: state.value.reason
    })
  }
}

const resetForm = () => {
  state.value = {
    username: '',
    gender: '',
    password: '',
    confirm: '',
    australianResident: false,
    reason: '',
    suburb: 'Clayton'
  }
  formErrors.value = {
    username: null,
    password: null,
    confirm: null,
    reason: null
  }
}
</script>

<template>
  <div class="container mt-2">
    <h2 class="text-center fw-bold">W5. Library Registration Form</h2>
    <p class="text-center text-muted mb-4">Let’s build some more advanced features into our form.</p>

    <form @submit.prevent="handleSubmit" class="mb-3">
      <!-- Username & Gender -->
      <div class="row g-3 mb-3">
        <div class="col-md-6">
          <label for="username" class="form-label">Username</label>
          <input
            id="username"
            type="text"
            class="form-control"
            v-model="state.username"
            @blur="() => checkUsername(true)"
            @input="() => checkUsername(false)"
            data-testid="username-input"
            :aria-invalid="!!formErrors.username"
            aria-describedby="usernameHelp"
          />
          <div v-if="formErrors.username" id="usernameHelp" class="text-danger" data-testid="username-error">
            {{ formErrors.username }}
          </div>
        </div>
        <div class="col-md-6">
          <label for="gender" class="form-label">Gender</label>
          <select
            id="gender"
            class="form-select"
            v-model="state.gender"
            required
            data-testid="gender-select"
          >
            <option disabled value="">Select…</option>
            <option value="male">male</option>
            <option value="female">female</option>
            <option value="other">other</option>
          </select>
        </div>
      </div>

      <!-- Password & Confirm -->
      <div class="row g-3 mb-3">
        <div class="col-md-6">
          <label for="password" class="form-label">Password</label>
          <input
            id="password"
            type="password"
            class="form-control"
            v-model="state.password"
            @blur="() => checkPassword(true)"
            @input="() => checkPassword(false)"
            data-testid="password-input"
            :aria-invalid="!!formErrors.password"
            aria-describedby="passwordHelp"
            autocomplete="new-password"
          />
          <div v-if="formErrors.password" id="passwordHelp" class="text-danger" data-testid="password-error">
            {{ formErrors.password }}
          </div>
        </div>
        <div class="col-md-6">
          <label for="confirm" class="form-label">Confirm Password</label>
          <input
            id="confirm"
            type="password"
            class="form-control"
            v-model="state.confirm"
            @blur="() => checkConfirm(true)"
            @input="() => checkConfirm(false)"
            data-testid="confirm-password-input"
            :aria-invalid="!!formErrors.confirm"
            aria-describedby="confirmPasswordHelp"
            autocomplete="new-password"
          />
          <div v-if="formErrors.confirm" id="confirmPasswordHelp" class="text-danger" data-testid="confirm-password-error">
            {{ formErrors.confirm }}
          </div>
        </div>
      </div>

      <!-- Resident -->
      <div class="form-check mb-3">
        <input
          class="form-check-input"
          type="checkbox"
          id="resident"
          v-model="state.australianResident"
          data-testid="resident-checkbox"
        />
        <label class="form-check-label" for="resident">Australian Resident?</label>
      </div>

      <!-- Reason -->
      <div class="mb-3">
        <label for="reason" class="form-label">Reason for joining</label>
        <textarea
          id="reason"
          class="form-control"
          rows="3"
          v-model="state.reason"
          @blur="() => checkReason(true)"
          @input="() => checkReason(false)"
          placeholder="e.g., I heard about this from my friend"
          data-testid="reason-textarea"
          :aria-invalid="!!formErrors.reason"
          aria-describedby="reasonHelp"
        />
        <div v-if="formErrors.reason" id="reasonHelp" class="text-danger" data-testid="reason-error">
          {{ formErrors.reason }}
        </div>
        <small v-else-if="reasonNote" class="text-success">{{ reasonNote }}</small>
      </div>

      <!-- Suburb -->
      <div class="mb-3">
        <label for="suburb" class="form-label">Suburb</label>
        <input id="suburb" class="form-control" v-model="state.suburb" data-testid="suburb-input" />
      </div>

      <!-- Buttons -->
      <div class="text-center">
        <button type="submit" class="btn btn-primary me-2" data-testid="submit-button">Submit</button>
        <button type="button" class="btn btn-secondary" @click="resetForm" data-testid="clear-button">Clear</button>
      </div>
    </form>

    <!-- Table -->
    <div class="row mt-4">
      <h5>This is a Datatable.</h5>
      <div class="table-responsive">
        <table class="table">
          <thead>
            <tr>
              <th>Username</th>
              <th>Password</th>
              <th>Australian Resident</th>
              <th>Gender</th>
              <th>Reason</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(row, i) in records" :key="i">
              <td>{{ row.username }}</td>
              <td>{{ row.password }}</td>
              <td>{{ row.resident ? 'Yes' : 'No' }}</td>
              <td>{{ row.gender || '-' }}</td>
              <td>{{ row.reason }}</td>
            </tr>
            <tr v-if="!records.length">
              <td colspan="5" class="text-muted">No rows yet. Submit the form to add one.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Cards -->
    <div class="row mt-4" v-if="records.length">
      <div class="d-flex flex-wrap justify-content-start">
        <div v-for="(card, idx) in records" :key="idx" class="card m-2" style="width: 18rem">
          <div class="card-header bg-primary text-white">User Information</div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Username: {{ card.username }}</li>
            <li class="list-group-item">Password: {{ card.password }}</li>
            <li class="list-group-item">Resident: {{ card.resident ? 'Yes' : 'No' }}</li>
            <li class="list-group-item">Gender: {{ card.gender || '-' }}</li>
            <li class="list-group-item">Reason: {{ card.reason }}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
h2 { font-size: 1.8rem; }
small { font-size: 0.95rem; }
</style>
