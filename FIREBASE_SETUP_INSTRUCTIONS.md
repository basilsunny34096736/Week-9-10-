# Firebase Setup Instructions

## 🎯 **To Get Users in Your Firebase Console:**

### **Step 1: Get Your Firebase Configuration**

1. **Go to your Firebase Console**: https://console.firebase.google.com/
2. **Select your project**: "FIT5032 - WEEK 7"
3. **Go to Project Settings** (gear icon)
4. **Scroll down to "Your apps"**
5. **Click "Add app" → Web app (</>)**
6. **Register your app** with a name like "Vue App"
7. **Copy the configuration object**

### **Step 2: Update Firebase Config**

Replace the configuration in `src/firebase/config.js` with your actual values:

```javascript
const firebaseConfig = {
  apiKey: "your-actual-api-key-here",
  authDomain: "fit5032-week-7.firebaseapp.com",
  projectId: "fit5032-week-7",
  storageBucket: "fit5032-week-7.appspot.com",
  messagingSenderId: "your-sender-id",
  appId: "your-app-id"
}
```

### **Step 3: Enable Authentication**

1. **In Firebase Console** → Go to "Authentication"
2. **Click "Get started"**
3. **Go to "Sign-in method" tab**
4. **Enable "Email/Password"** authentication
5. **Save the changes**

### **Step 4: Enable Firestore Database**

1. **In Firebase Console** → Go to "Firestore Database"
2. **Click "Create database"**
3. **Choose "Start in test mode"**
4. **Select a location** (choose closest to you)
5. **Click "Done"**

### **Step 5: Test Your Setup**

1. **Start your app**: `npm run dev`
2. **Go to `/register`** and create a new user
3. **Check Firebase Console** → Authentication → Users
4. **You should see your registered user!**

## 🔧 **What I've Updated:**

### **✅ Switched to Real Firebase Authentication:**
- **Created `realAuthService.js`** - Real Firebase authentication
- **Updated all views** to use real Firebase instead of mock
- **Updated router** to use real authentication
- **Removed emulator connections** - Now uses production Firebase

### **✅ Features Now Working:**
- **Real user registration** → Shows in Firebase Console
- **Real user authentication** → Firebase handles login/logout
- **Real user data storage** → Stored in Firestore
- **Real role management** → Stored in Firestore

## 📸 **Perfect for EFOLIO Screenshots:**

### **Task 7.1:**
- **Registration**: Users will appear in Firebase Console
- **Login**: Real Firebase authentication
- **Firebase Console**: Shows registered users

### **Task 7.2:**
- **Multiple Roles**: Real role-based authentication
- **Logout**: Real Firebase logout
- **User Management**: All in Firebase Console

## 🚨 **Important Notes:**

1. **Replace the config** with your actual Firebase project details
2. **Enable Authentication** in Firebase Console
3. **Enable Firestore** for user data storage
4. **Test registration** to see users in Firebase Console

Once you update the configuration with your actual Firebase project details, users will appear in your Firebase Console! 🎉
