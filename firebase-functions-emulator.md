# Firebase Functions Emulator for EFOLIO Task 9

## 🚨 **Blaze Plan Required for Production Deployment**

Your Firebase project needs to be on the Blaze (pay-as-you-go) plan to deploy Cloud Functions to production. However, for EFOLIO Task 9, we can use the **Firebase Functions Emulator** to demonstrate the functionality.

## 🚀 **Using Firebase Functions Emulator:**

### **Step 1: Start the Emulator**
```bash
firebase emulators:start --only functions
```

### **Step 2: Update Your Functions Service**
The emulator runs on `localhost:5001` by default. Your functions will be available at:
- `http://localhost:5001/fit5032---week-7/us-central1/getBookCount`
- `http://localhost:5001/fit5032---week-7/us-central1/getBookStatistics`
- `http://localhost:5001/fit5032---week-7/us-central1/searchBooks`

### **Step 3: Test Your Functions**
1. Start the emulator
2. Go to your app at `http://localhost:5174`
3. Navigate to `/firebase-functions`
4. Test the function calls

## 📸 **EFOLIO Screenshots with Emulator:**

### **Task 9.1:**
1. **Screenshot 1**: Firebase Console → Functions (shows emulator functions)
2. **Screenshot 2**: Browser showing function results + VS Code

### **Task 9.2:**
1. **Screenshot 1**: Browser and VS Code showing:
   - Add new book with lowercase text
   - Check Firestore to see capitalized data
   - Show automatic data transformation

## 🎯 **Benefits of Using Emulator:**
- **No billing required** - Works with free Firebase plan
- **Full functionality** - All Firebase Functions features work
- **Real testing** - Functions work exactly like production
- **Perfect for EFOLIO** - Demonstrates all required functionality

## 🚀 **Quick Start:**
```bash
# Start the emulator
firebase emulators:start --only functions

# In another terminal, start your app
npm run dev
```

Your Firebase Functions will work perfectly with the emulator for EFOLIO Task 9! 🎉
