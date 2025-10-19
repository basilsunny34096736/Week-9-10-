import { 
  collection, 
  addDoc, 
  getDocs, 
  doc, 
  updateDoc, 
  deleteDoc, 
  query, 
  where, 
  orderBy, 
  limit,
  getDoc
} from 'firebase/firestore'
import { db } from './config.js'

// Add a new book to Firestore
export const addBook = async (bookData) => {
  try {
    const docRef = await addDoc(collection(db, 'books'), bookData)
    return { success: true, bookId: docRef.id }
  } catch (error) {
    console.error('Error adding book:', error)
    return { success: false, error: error.message }
  }
}

// Get all books from Firestore
export const getAllBooks = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, 'books'))
    const books = []
    querySnapshot.forEach((doc) => {
      books.push({
        id: doc.id,
        ...doc.data()
      })
    })
    return { success: true, books }
  } catch (error) {
    console.error('Error getting books:', error)
    return { success: false, error: error.message }
  }
}

// Get a single book by ID
export const getBookById = async (bookId) => {
  try {
    const docRef = doc(db, 'books', bookId)
    const docSnap = await getDoc(docRef)
    
    if (docSnap.exists()) {
      return { success: true, book: { id: docSnap.id, ...docSnap.data() } }
    } else {
      return { success: false, error: 'Book not found' }
    }
  } catch (error) {
    console.error('Error getting book:', error)
    return { success: false, error: error.message }
  }
}

// Update a book
export const updateBook = async (bookId, updateData) => {
  try {
    const bookRef = doc(db, 'books', bookId)
    const updatedData = {
      ...updateData,
      updatedAt: new Date()
    }
    await updateDoc(bookRef, updatedData)
    return { success: true }
  } catch (error) {
    console.error('Error updating book:', error)
    return { success: false, error: error.message }
  }
}

// Delete a book
export const deleteBook = async (bookId) => {
  try {
    const bookRef = doc(db, 'books', bookId)
    await deleteDoc(bookRef)
    return { success: true }
  } catch (error) {
    console.error('Error deleting book:', error)
    return { success: false, error: error.message }
  }
}

// Query books by category
export const getBooksByCategory = async (category) => {
  try {
    const q = query(
      collection(db, 'books'),
      where('category', '==', category)
    )
    const querySnapshot = await getDocs(q)
    const books = []
    querySnapshot.forEach((doc) => {
      books.push({
        id: doc.id,
        ...doc.data()
      })
    })
    return { success: true, books }
  } catch (error) {
    console.error('Error getting books by category:', error)
    return { success: false, error: error.message }
  }
}

// Query books by author
export const getBooksByAuthor = async (author) => {
  try {
    const q = query(
      collection(db, 'books'),
      where('author', '==', author)
    )
    const querySnapshot = await getDocs(q)
    const books = []
    querySnapshot.forEach((doc) => {
      books.push({
        id: doc.id,
        ...doc.data()
      })
    })
    return { success: true, books }
  } catch (error) {
    console.error('Error getting books by author:', error)
    return { success: false, error: error.message }
  }
}

// Query books with price range
export const getBooksByPriceRange = async (minPrice, maxPrice) => {
  try {
    const q = query(
      collection(db, 'books'),
      where('price', '>=', minPrice),
      where('price', '<=', maxPrice)
    )
    const querySnapshot = await getDocs(q)
    const books = []
    querySnapshot.forEach((doc) => {
      books.push({
        id: doc.id,
        ...doc.data()
      })
    })
    return { success: true, books }
  } catch (error) {
    console.error('Error getting books by price range:', error)
    return { success: false, error: error.message }
  }
}

// Get books ordered by title
export const getBooksOrderedByTitle = async (limitCount = 10) => {
  try {
    const q = query(
      collection(db, 'books'),
      orderBy('title'),
      limit(limitCount)
    )
    const querySnapshot = await getDocs(q)
    const books = []
    querySnapshot.forEach((doc) => {
      books.push({
        id: doc.id,
        ...doc.data()
      })
    })
    return { success: true, books }
  } catch (error) {
    console.error('Error getting books ordered by title:', error)
    return { success: false, error: error.message }
  }
}

// Get books ordered by publication year (newest first)
export const getBooksOrderedByYear = async (limitCount = 10) => {
  try {
    const q = query(
      collection(db, 'books'),
      orderBy('publicationYear', 'desc'),
      limit(limitCount)
    )
    const querySnapshot = await getDocs(q)
    const books = []
    querySnapshot.forEach((doc) => {
      books.push({
        id: doc.id,
        ...doc.data()
      })
    })
    return { success: true, books }
  } catch (error) {
    console.error('Error getting books ordered by year:', error)
    return { success: false, error: error.message }
  }
}

// Get books by category and order by title
export const getBooksByCategoryOrdered = async (category, limitCount = 10) => {
  try {
    const q = query(
      collection(db, 'books'),
      where('category', '==', category),
      orderBy('title'),
      limit(limitCount)
    )
    const querySnapshot = await getDocs(q)
    const books = []
    querySnapshot.forEach((doc) => {
      books.push({
        id: doc.id,
        ...doc.data()
      })
    })
    return { success: true, books }
  } catch (error) {
    console.error('Error getting books by category ordered:', error)
    return { success: false, error: error.message }
  }
}

// Get books with price greater than specified amount, ordered by price
export const getExpensiveBooks = async (minPrice, limitCount = 5) => {
  try {
    const q = query(
      collection(db, 'books'),
      where('price', '>', minPrice),
      orderBy('price', 'desc'),
      limit(limitCount)
    )
    const querySnapshot = await getDocs(q)
    const books = []
    querySnapshot.forEach((doc) => {
      books.push({
        id: doc.id,
        ...doc.data()
      })
    })
    return { success: true, books }
  } catch (error) {
    console.error('Error getting expensive books:', error)
    return { success: false, error: error.message }
  }
}
