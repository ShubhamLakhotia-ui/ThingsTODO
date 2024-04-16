// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useUser } from '.././src/components/context/UserContext'; // Adjust the path as necessary

import SignUp from './components/SignUp/signup';
import Landing from './layouts/Landing/landing';
import Login from './components/LoginPage/login';


const App = () => {
  const { user } = useUser();

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={
          !user ? (
            <Navigate to="/login" />
          ) : (
            user.isAdmin ? (
              <Navigate to="/adminnavbar" />
            ) : (
              <Navigate to="/usernavbar" />
            )
          )
        } />
        <Route path="/usernavbar" element={<Landing />} />
        {/* <Route path="/adminnavbar" element={<AdminNavbar />} /> */}
        {/* Additional routes here */}
      </Routes>
    </Router>
  );
};

export default App;
