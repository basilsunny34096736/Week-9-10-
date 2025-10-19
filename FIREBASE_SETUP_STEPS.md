# Firebase Setup Steps - Get Users in Firebase Console

## 🚨 **Your Firebase Project Needs These Services Enabled:**

### **Step 1: Enable Authentication**

1. **Go to Firebase Console**: https://console.firebase.google.com/
2. **Select your project**: "FIT5032 - WEEK 7"
3. **Click "Authentication"** in the left sidebar
4. **Click "Get started"** if you see the setup screen
5. **Go to "Sign-in method" tab**
6. **Enable "Email/Password"** authentication
7. **Click "Save"**

### **Step 2: Enable Firestore Database**

1. **In Firebase Console** → Click "Firestore Database"
2. **Click "Create database"**
3. **Choose "Start in test mode"** (for development)
4. **Select a location** (choose closest to you)
5. **Click "Done"**

### **Step 3: Test Your App**

1. **Go to your app**: http://localhost:5174
2. **Navigate to `/register`**
3. **Try to register a new user**
4. **Check Firebase Console** → Authentication → Users

## 🔧 **If Users Still Don't Appear:**

### **Check Browser Console:**
1. **Open Developer Tools** (F12)
2. **Go to Console tab**
3. **Look for error messages**
4. **Check Network tab** for failed requests

### **Common Issues:**
- **Authentication not enabled** → Enable Email/Password auth
- **Firestore not enabled** → Create Firestore database
- **Network errors** → Check Firebase project configuration
- **CORS errors** → Make sure domain is authorized

### **Test Steps:**
1. **Enable Authentication** (Email/Password)
2. **Enable Firestore** (Test mode)
3. **Refresh your app**
4. **Try registration**
5. **Check Firebase Console** for users

## 📸 **For EFOLIO Screenshots:**

Once services are enabled:
- **Registration** will create real users in Firebase Console
- **Login** will use real Firebase authentication
- **Dashboard** will show real user data
- **Firebase Console** will show registered users

The users will appear in your Firebase Console once you enable Authentication and Firestore! 🎉
