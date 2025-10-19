# Deploy Firebase Functions - Step by Step Guide

## 🚀 **Deploy Your Firebase Functions for EFOLIO Task 9**

### **Step 1: Install Firebase CLI**
```bash
npm install -g firebase-tools
```

### **Step 2: Login to Firebase**
```bash
firebase login
```
- This will open a browser window
- Sign in with your Google account
- Allow Firebase CLI access

### **Step 3: Install Function Dependencies**
```bash
cd functions
npm install
cd ..
```

### **Step 4: Deploy Functions**
```bash
firebase deploy --only functions
```

### **Step 5: Verify Deployment**
1. Go to Firebase Console → Functions
2. You should see your deployed functions:
   - `getBookCount`
   - `capitalizeBookData`
   - `getBookStatistics`
   - `searchBooks`

## 📸 **EFOLIO Task 9 Screenshots:**

### **Task 9.1 (Pass and Credit Level):**
1. **Screenshot 1**: Firebase Console → Functions → Your deployed functions with your account visible
2. **Screenshot 2**: Browser showing book count + VS Code showing the function call

### **Task 9.2 (Distinction and High Distinction Level):**
1. **Screenshot 1**: Browser and VS Code showing:
   - Add a new book with lowercase text
   - Check Firestore to see capitalized data
   - Show the function automatically capitalizing the data

## 🔧 **Functions Created:**

### **1. getBookCount (Task 9.1)**
- **Type**: HTTPS Callable Function
- **Purpose**: Returns total number of books from Firestore
- **Usage**: Call from `/firebase-functions` page

### **2. capitalizeBookData (Task 9.2)**
- **Type**: Firestore Trigger Function
- **Purpose**: Automatically capitalizes book data when new book is added
- **Usage**: Runs automatically when you add a book via `/add-book` page

### **3. getBookStatistics (Bonus)**
- **Type**: HTTPS Callable Function
- **Purpose**: Returns detailed book statistics
- **Usage**: Call from `/firebase-functions` page

### **4. searchBooks (Bonus)**
- **Type**: HTTPS Callable Function
- **Purpose**: Search books by title
- **Usage**: Call from `/firebase-functions` page

## 🎯 **Testing Your Functions:**

### **Test Task 9.1:**
1. Go to `/firebase-functions` page
2. Click "Get Book Count" button
3. Should show real count from your Firestore database
4. Take screenshot of result

### **Test Task 9.2:**
1. Go to `/add-book` page
2. Add a new book with lowercase text (e.g., "my book title")
3. Check Firestore Console - data should be capitalized ("MY BOOK TITLE")
4. Take screenshots showing the transformation

## 🚨 **Important Notes:**

1. **Functions must be deployed** to work with real data
2. **Firestore triggers** run automatically on document creation
3. **HTTPS callable functions** can be called from frontend
4. **Check Firebase Console** to see deployed functions
5. **Test with real data** to see the capitalization effect

## 🎉 **After Deployment:**

Your Firebase Functions will:
- **Count real books** from your Firestore database
- **Automatically capitalize** new book data
- **Provide real statistics** about your books
- **Enable search functionality** across your books

Your Firebase Functions are ready for EFOLIO Task 9! 🚀
