# spa-oidc-devminds

A simple single-page application (SPA) demonstrating OpenID Connect (OIDC) authentication using Auth0, built with React 18 and Vite.

---

## Overview

This SPA demonstrates how modern web applications implement secure authentication using the OpenID Connect (OIDC) protocol.  
After logging in through Auth0’s Universal Login, users can:

- View minimal demographic information (name, email, profile picture)
- Access protected static content
- Log out and return to the public state

The application is intentionally simple, focusing on authentication flow and protected content.

---

## Features

- OIDC authentication using Auth0  
- Login and Logout functionality  
- User profile display (name, email, & profile picture)  
- Protected static content visible only after authentication  
- Fast development environment using React & Vite  
- Clean, modular component structure  

---

## Tech Stack

- **React 18**
- **Vite**
- **Auth0 React SDK**
- **JavaScript (ES Modules)**

---

## Project Structure

```
spa-oidc-devminds/
│
├── src/
│   ├── components/
│   │   ├── LoginButton.jsx
│   │   ├── LogoutButton.jsx
│   │   ├── Profile.jsx
│   │   └── StaticContent.jsx
│   ├── App.jsx
│   ├── authConfig.js
│   └── main.jsx
│
├── index.html
├── package.json
└── README.md
```

---

## Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/BBrown-Dev/spa-oidc-devminds.git
cd spa-oidc-devminds
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

Your application will be available at:

```
http://localhost:5173
```

---

## Auth0 Configuration

To run this project, configure an Auth0 application.

### 1. Create an Auth0 SPA application

In the Auth0 Dashboard:

- Navigate to Applications &rarr; Create Application
- Select Single Page Web Application

### 2. Add required URLs

**Allowed Callback URLs**
```
http://localhost:5173
```

**Allowed Logout URLs**
```
http://localhost:5173
```

### 3. Create a test user

In the Auth0 Dashboard:

- Go to User Management &rarr; Users &rarr; Create User
- Provide an email, password, and select the default database connection (e.g., `Username-Password-Authentication`)

### 4. Add your Auth0 credentials

Edit:

```
src/authConfig.js
```

Example:

```js
export const authConfig = {
  domain: "YOUR_AUTH0_DOMAIN",
  clientId: "YOUR_AUTH0_CLIENT_ID",
  authorizationParams: {
    redirect_uri: window.location.origin
  }
}
```

Replace `YOUR_AUTH0_DOMAIN` and `YOUR_AUTH0_CLIENT_ID` with values from your Auth0 application settings.

---

## How to Test the Application

1. Start the dev server:

   ```bash
   npm run dev
   ```

2. Open the app in your browser:

   ```
   http://localhost:5173
   ```

3. Click Log In.

4. Authenticate using your Auth0 test user credentials.

5. After redirect, you should see:

   - A Logout button  
   - A message confirming authentication  
   - Your name, email, and profile picture  
   - A static content section  

This confirms the OIDC authentication flow is functioning correctly.

---

## License

This project is licensed under the MIT License.