# Campusly — Student Management System
A React student management dashboard using React Router, Redux, Redux Thunk, Bootstrap 5 and JSON Server.

## Features
- Login/logout with protected student routes (demo authentication)
- Dashboard statistics
- Student listing with profile image, roll number, phone, class and grade
- Add, edit and delete student records
- Search students, filter by class, sort by name or roll number
- Redux store, actions, reducer and asynchronous thunks
- JSON Server REST API and starter records in `db.json`
- Responsive Bootstrap-based layout

## Run locally
Install Node.js LTS. In this folder run:

```bash
npm install
```

Start the API in terminal 1:

```bash
npm run server
```

Start React in terminal 2:

```bash
npm run dev
```

Open the Vite URL (usually http://localhost:5173). Keep both terminals running while using the app.

## Demo login
Use any email address and any non-empty password. This is a classroom demonstration only; it is not production-grade authentication. A real system needs a secure backend, password hashing and session/token handling.

## Assignment mapping
- Redux: `src/redux/`
- JSON Server: `db.json`, `package.json` script `server`
- Fetch/display: `src/pages/StudentList.jsx`, `src/components/StudentDetails.jsx`
- Add/update: `src/components/StudentForm.jsx`
- Delete: `StudentList.jsx` and `StudentDetails.jsx`
- Search/filter/sort: `StudentList.jsx`
- Authentication/private route: `src/context/Auth.jsx`, `src/components/PrivateRoute.jsx`
- Navigation: `src/components/Navbar.jsx`
- Styling: `src/styles.css`, Bootstrap imports in `src/main.jsx`

## Note
This project uses Vite as the React development server instead of Create React App, while implementing the requested React, Router, Redux, Redux Thunk, Bootstrap and JSON Server features.
