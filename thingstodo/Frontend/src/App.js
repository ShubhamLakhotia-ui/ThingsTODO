import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useUser } from './components/context/UserContext'; // Adjust the path if necessary

import SignUp from './components/SignUp/signup';
import Landing from './layouts/Landing/landing';
import Login from './components/LoginPage/login';
import Booknow from './BookNow/booknow';
// import AdminLanding from './adminhome/adminhomepage';


const App = () => {
  const { user } = useUser();

  return (
    <Router>
      <Routes>
        <Route path="/adminhome" element={<Booknow  />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/book" element={<Booknow />} />
        <Route path="/landing" element={<Landing />} />
        <Route
          path="/"
          element={
            !user ? (
              <Navigate to="/login" />
            ) : (
              user.isAdmin ? (
                <Navigate to="/adminnavbar" />
              ) : (
                <Navigate to="/usernavbar" />
              )
            )
          }
        />
        {/* Define routes for adminnavbar, usernavbar, and any other routes */}
      </Routes>
    </Router>
  );
};

export default App;
