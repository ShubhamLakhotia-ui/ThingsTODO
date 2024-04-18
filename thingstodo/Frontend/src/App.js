import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useUser } from './components/context/UserContext';

import SignUp from './components/SignUp/signup';
import Landing from './layouts/Landing/landing';

import Booknow from './BookNow/booknow';
// import AdminLanding from './adminhome/adminhomepage';
import AdminLanding from './layouts/Landing/adminLanding';
import EditPage from './layouts/Landing/edit';
import AddEventForm from './layouts/Landing/addEvent';
import Login from './components/LoginPage/login';
import BookingList from './layouts/Landing/bookingList';

const App = () => {
  const { user } = useUser();
console.log("User",user);
  return (
    <Router>
      <Routes>
      <Route path="/usernavbar" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/book" element={<Booknow />} />
        <Route path="/adminhome" element={<Booknow  />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="/admin-landing" element={<AdminLanding />} />
        <Route path="/add-event" element={<AddEventForm />} />
        <Route path="/booking-list" element={<BookingList/>}></Route>
        <Route path="/edit" element={<EditPage />} />
       
        <Route path="/" element={
          !user ? (
            <Navigate to="/login" />
          ) : (
              user.isAdmin ? (
                <Navigate to="/admin-landing" />
              ) : (
                <Navigate to="/usernavbar" />
              )
            )
          }/>
      </Routes>
    </Router>
  );
};

export default App;
