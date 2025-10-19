# Firebase Authentication Setup for EFOLIO Tasks

## Overview
This project implements a complete Firebase authentication system with role-based access control for EFOLIO Tasks 7.1 and 7.2.

## Features Implemented

### EFOLIO Task 7.1 (Pass and Credit Level)
- ✅ Registration page with form validation
- ✅ Login page with authentication
- ✅ User information display with console logging
- ✅ Firebase user management

### EFOLIO Task 7.2 (Distinction and High Distinction Level)
- ✅ Multiple user roles (Admin, Moderator, User)
- ✅ Role-based authentication system
- ✅ Logout functionality with user state management
- ✅ Console logging for debugging

## Setup Instructions

### 1. Firebase Project Configuration

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project or use an existing one
3. Enable Authentication:
   - Go to Authentication > Sign-in method
   - Enable Email/Password authentication
4. Enable Firestore Database:
   - Go to Firestore Database
   - Create database in test mode
5. Get your Firebase configuration:
   - Go to Project Settings > General
   - Scroll down to "Your apps" section
   - Click on the web app icon
   - Copy the configuration object

### 2. Update Firebase Configuration

Replace the placeholder configuration in `/src/firebase/config.js`:

```javascript
const firebaseConfig = {
  apiKey: "your-actual-api-key",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-actual-project-id",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "your-sender-id",
  appId: "your-app-id"
}
```

### 3. Firestore Security Rules

Update your Firestore security rules to allow user data access:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Users can read/write their own data
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
  }
}
```

## Usage Instructions

### Running the Application

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Navigate to `http://localhost:5173`

### Testing Authentication

#### Registration (Task 7.1)
1. Go to `/auth` route
2. Click on "Register" tab
3. Fill in the registration form:
   - Full Name: Your name
   - Email: Your email
   - Password: Minimum 6 characters
   - Role: Select from User, Admin, or Moderator
4. Click "Create Account"
5. Take screenshots of:
   - Browser showing registration page
   - VS Code with the registration form code
   - Firebase Console showing the registered user

#### Login (Task 7.1)
1. Go to `/auth` route
2. Click on "Login" tab
3. Enter your credentials
4. Click "Sign In"
5. Take screenshots of:
   - Browser showing login page
   - VS Code with console panel showing current user
   - User information displayed on the page

#### Role-Based Authentication (Task 7.2)
1. Register multiple users with different roles:
   - User with "admin" role
   - User with "moderator" role
   - User with "user" role
2. Login with each role and navigate to `/dashboard`
3. Take screenshots showing:
   - Different content based on user role
   - Console logs showing role information
   - Role-specific permissions

#### Logout (Task 7.2)
1. While logged in, click the "Logout" button
2. Take screenshots of:
   - Logout page with developer console
   - Console showing user state changes
   - Return to login page

## File Structure

```
src/
├── firebase/
│   ├── config.js          # Firebase configuration
│   └── authService.js     # Authentication service
├── Views/
│   ├── FirebaseSigninView.vue  # Registration/Login page
│   └── DashboardView.vue       # Role-based dashboard
├── Router/
│   └── index.js           # Route configuration
└── App.vue                 # Main app component
```

## Key Features

### Authentication Service (`authService.js`)
- User registration with role assignment
- Email/password authentication
- Role-based access control
- Real-time auth state management
- Firestore integration for user data

### Registration/Login Page (`FirebaseSigninView.vue`)
- Tabbed interface for login/registration
- Form validation
- Real-time user state display
- Console logging for debugging
- Error handling and user feedback

### Dashboard (`DashboardView.vue`)
- Role-based content display
- User information panel
- Permission-based UI elements
- Console logging for role verification
- Logout functionality

## Console Logging

The application includes comprehensive console logging for debugging:

- Auth state changes
- User role information
- Login/logout events
- Role-based permission checks

Open browser developer tools (F12) to see detailed logs.

## Screenshot Requirements

### Task 7.1 Screenshots:
1. **Registration Page**: Browser + VS Code
2. **Login Page**: Browser + VS Code + Console panel showing current user
3. **Firebase Console**: Registered user in Firebase Authentication

### Task 7.2 Screenshots:
1. **Multiple Roles**: Browser + VS Code showing different user roles
2. **Logout Page**: Browser + VS Code + Developer console showing current user

## Troubleshooting

### Common Issues:
1. **Firebase config not working**: Ensure you've replaced the placeholder config
2. **Authentication not working**: Check Firebase Authentication is enabled
3. **Roles not saving**: Verify Firestore rules allow user data writes
4. **Console errors**: Check browser console for detailed error messages

### Debug Steps:
1. Check browser console for errors
2. Verify Firebase project configuration
3. Ensure Firestore rules are properly set
4. Check network tab for failed requests

## Support

If you encounter issues:
1. Check the browser console for error messages
2. Verify Firebase project setup
3. Ensure all dependencies are installed
4. Check Firestore security rules
