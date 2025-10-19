// Simple script to add test data to Firestore
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, connectFirestoreEmulator } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB4uQYB3FBgdJb3RVZ65uPq9k4RuU0OD0Y",
  authDomain: "fit5032---week-7.firebaseapp.com",
  projectId: "fit5032---week-7",
  storageBucket: "fit5032---week-7.firebasestorage.app",
  messagingSenderId: "634374754025",
  appId: "1:634374754025:web:aac4b9f850883d70826a78"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Connect to Firestore emulator
connectFirestoreEmulator(db, '127.0.0.1', 9099);

async function addTestData() {
  try {
    console.log('Adding test books to Firestore...');
    
    const testBooks = [
      {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        category: "Fiction",
        price: 12.99,
        pages: 180,
        publicationYear: 1925,
        description: "A classic American novel"
      },
      {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        category: "Fiction",
        price: 14.99,
        pages: 281,
        publicationYear: 1960,
        description: "A story of racial injustice and childhood innocence"
      },
      {
        title: "1984",
        author: "George Orwell",
        category: "Dystopian Fiction",
        price: 13.99,
        pages: 328,
        publicationYear: 1949,
        description: "A dystopian social science fiction novel"
      },
      {
        title: "Pride and Prejudice",
        author: "Jane Austen",
        category: "Romance",
        price: 11.99,
        pages: 432,
        publicationYear: 1813,
        description: "A romantic novel of manners"
      },
      {
        title: "The Catcher in the Rye",
        author: "J.D. Salinger",
        category: "Fiction",
        price: 15.99,
        pages: 277,
        publicationYear: 1951,
        description: "A coming-of-age story"
      }
    ];

    for (const book of testBooks) {
      const docRef = await addDoc(collection(db, 'books'), {
        ...book,
        createdAt: new Date(),
        updatedAt: new Date()
      });
      console.log(`Added book: ${book.title} with ID: ${docRef.id}`);
    }

    console.log('Test data added successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Error adding test data:', error);
    process.exit(1);
  }
}

addTestData();
