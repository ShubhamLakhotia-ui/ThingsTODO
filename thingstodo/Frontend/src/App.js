// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useUser } from '.././src/components/context/UserContext'; // Adjust the path as necessary

import SignUp from './components/SignUp/signup';
import Landing from './layouts/Landing/landing';
import Login from './components/LoginPage/login';
import AdminLanding from './layouts/Landing/adminLanding';
import EditPage from './layouts/Landing/edit';


const App = () => {
  const { user } = useUser();

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="/admin-landing" element={<AdminLanding />} />
        {/* <Route path="/edit" element={<EditPage />} /> */}
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
