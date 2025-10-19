import { getFunctions, httpsCallable, connectFunctionsEmulator } from 'firebase/functions'
import app from './config.js'

// Initialize Firebase Functions
const functions = getFunctions(app)

// Connect to Functions emulator in development
if (import.meta.env.DEV) {
  try {
    // Check if already connected to avoid multiple connections
    if (!functions._delegate._url) {
      connectFunctionsEmulator(functions, '127.0.0.1', 5001)
      console.log('Connected to Firebase Functions emulator on port 5001')
    }
  } catch (error) {
    console.log('Functions emulator connection error:', error.message)
    console.log('Using production config')
  }
}

// EFOLIO Task 9.1: Get book count
export const getBookCount = async () => {
  try {
    const getBookCountFunction = httpsCallable(functions, 'getBookCount')
    const result = await getBookCountFunction()
    return result.data
  } catch (error) {
    console.error('Error calling getBookCount function:', error)
    return {
      success: false,
      error: error.message
    }
  }
}

// Get book statistics
export const getBookStatistics = async () => {
  try {
    const getBookStatisticsFunction = httpsCallable(functions, 'getBookStatistics')
    const result = await getBookStatisticsFunction()
    return result.data
  } catch (error) {
    console.error('Error calling getBookStatistics function:', error)
    return {
      success: false,
      error: error.message
    }
  }
}

// Search books
export const searchBooks = async (searchTerm) => {
  try {
    const searchBooksFunction = httpsCallable(functions, 'searchBooks')
    const result = await searchBooksFunction({ searchTerm })
    return result.data
  } catch (error) {
    console.error('Error calling searchBooks function:', error)
    return {
      success: false,
      error: error.message
    }
  }
}
