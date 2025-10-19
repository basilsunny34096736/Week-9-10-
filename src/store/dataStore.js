import { ref, reactive } from 'vue'

// Shared data store for the application
export const dataStore = reactive({
  // Library registration records
  libraryRecords: [],
  
  // Add a new record
  addRecord(record) {
    this.libraryRecords.push({
      ...record,
      id: Date.now(), // Simple ID generation
      createdAt: new Date().toISOString()
    })
    console.log('Record added to store:', record)
  },
  
  // Get all records
  getRecords() {
    return this.libraryRecords
  },
  
  // Clear all records
  clearRecords() {
    this.libraryRecords = []
    console.log('All records cleared')
  },
  
  // Get record count
  getRecordCount() {
    return this.libraryRecords.length
  }
})

// Export reactive store
export default dataStore
