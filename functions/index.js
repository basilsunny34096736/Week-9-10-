const functions = require('firebase-functions');
const admin = require('firebase-admin');

// Initialize Firebase Admin
admin.initializeApp();

const db = admin.firestore();

// EFOLIO Task 9.1: Function to get book count
exports.getBookCount = functions.https.onCall(async (data, context) => {
  try {
    // Get all books from Firestore
    const booksRef = db.collection('books');
    const snapshot = await booksRef.get();
    
    const bookCount = snapshot.size;
    
    console.log(`Total books in database: ${bookCount}`);
    
    return {
      success: true,
      bookCount: bookCount,
      message: `Total number of books: ${bookCount}`
    };
  } catch (error) {
    console.error('Error getting book count:', error);
    return {
      success: false,
      error: error.message
    };
  }
});

// Additional function: Get book statistics
exports.getBookStatistics = functions.https.onCall(async (data, context) => {
  try {
    const booksRef = db.collection('books');
    const snapshot = await booksRef.get();
    
    let totalBooks = 0;
    let totalValue = 0;
    const categories = {};
    const authors = {};
    
    snapshot.forEach(doc => {
      const book = doc.data();
      totalBooks++;
      
      if (book.price) {
        totalValue += book.price;
      }
      
      if (book.category) {
        categories[book.category] = (categories[book.category] || 0) + 1;
      }
      
      if (book.author) {
        authors[book.author] = (authors[book.author] || 0) + 1;
      }
    });
    
    return {
      success: true,
      statistics: {
        totalBooks,
        totalValue: Math.round(totalValue * 100) / 100,
        categories,
        authors,
        averageValue: totalBooks > 0 ? Math.round((totalValue / totalBooks) * 100) / 100 : 0
      }
    };
  } catch (error) {
    console.error('Error getting book statistics:', error);
    return {
      success: false,
      error: error.message
    };
  }
});

// Function to search books by title
exports.searchBooks = functions.https.onCall(async (data, context) => {
  try {
    const { searchTerm } = data;
    
    if (!searchTerm) {
      return {
        success: false,
        error: 'Search term is required'
      };
    }
    
    const booksRef = db.collection('books');
    const snapshot = await booksRef.get();
    
    const results = [];
    snapshot.forEach(doc => {
      const book = doc.data();
      if (book.title && book.title.toLowerCase().includes(searchTerm.toLowerCase())) {
        results.push({
          id: doc.id,
          ...book
        });
      }
    });
    
    return {
      success: true,
      results,
      count: results.length
    };
  } catch (error) {
    console.error('Error searching books:', error);
    return {
      success: false,
      error: error.message
    };
  }
});

// EFOLIO Task 9.2: Function to capitalize book data (HTTPS callable version)
exports.capitalizeBookData = functions.https.onCall(async (data, context) => {
  try {
    const { bookId } = data;
    
    if (!bookId) {
      return {
        success: false,
        error: 'Book ID is required'
      };
    }
    
    const bookRef = db.collection('books').doc(bookId);
    const bookDoc = await bookRef.get();
    
    if (!bookDoc.exists) {
      return {
        success: false,
        error: 'Book not found'
      };
    }
    
    const bookData = bookDoc.data();
    
    console.log(`Processing book: ${bookId}`);
    console.log('Original data:', bookData);
    
    // Capitalize text fields
    const capitalizedData = {
      title: bookData.title ? bookData.title.toUpperCase() : bookData.title,
      author: bookData.author ? bookData.author.toUpperCase() : bookData.author,
      category: bookData.category ? bookData.category.toUpperCase() : bookData.category,
      description: bookData.description ? bookData.description.toUpperCase() : bookData.description,
      isbn: bookData.isbn ? bookData.isbn.toUpperCase() : bookData.isbn,
      // Keep other fields unchanged
      price: bookData.price,
      pages: bookData.pages,
      publicationYear: bookData.publicationYear,
      createdAt: bookData.createdAt,
      updatedAt: new Date()
    };
    
    console.log('Capitalized data:', capitalizedData);
    
    // Update the document with capitalized data
    await bookRef.update(capitalizedData);
    
    console.log(`Successfully capitalized book data for: ${bookId}`);
    
    return {
      success: true,
      message: 'Book data capitalized successfully',
      data: capitalizedData
    };
  } catch (error) {
    console.error('Error capitalizing book data:', error);
    return {
      success: false,
      error: error.message
    };
  }
});