import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useUser } from './components/context/UserContext';

import SignUp from './components/SignUp/signup';
import Landing from './layouts/Landing/landing';
import Booknow from './BookNow/booknow';
import AdminLanding from './layouts/Landing/adminLanding';
import EditPage from './layouts/Landing/edit';
import AddEventForm from './layouts/Landing/addEvent';
import Login from './components/LoginPage/login';
import QueryForm from './query';

import BookingList from './layouts/Landing/bookingList';
import AdminQueryPage from './query/adminPage';
import AdminDashboard from './adminDashboard/adminDashboard';

const App = () => {
  const { user } = useUser();
  const userType =sessionStorage.getItem('userType')
console.log("User",user);
  return (
    <Router>
      <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/usernavbar" element={userType==="user"?<Landing />: <Navigate to="/login" />} />
      <Route path="/landing" element={userType==="user"?<Landing />: <Navigate to="/login" />} />
      <Route path="/book" element={userType==="user"?<Booknow  />: <Navigate to="/login" />}/>
      <Route path="/contact-query" element={userType==="user"?<QueryForm/>: <Navigate to="/login" />} />


       <Route path="/admin-landing" element={userType==="admin"?<AdminLanding />:<Navigate to="/login" />} />
       <Route path="/contact-query" element={userType==="admin"?<QueryForm/>:<Navigate to="/login" />} />
       <Route path='/admin-dashboard' element={userType==="admin"?<AdminDashboard/>:<Navigate to="/login" />}/>
        <Route path="/add-event" element={userType==="admin"?<AddEventForm />:<Navigate to="/login" />} />
        <Route path="/booking-list" element={userType==="admin"?<BookingList/>:<Navigate to="/login" />}></Route>
        <Route path="/edit" element={<EditPage />} />
        <Route path="/admin-query" element={userType==="admin"?<AdminQueryPage/>:<Navigate to="/login" />}/>
        <Route path="/" element={
          !user ? (
            <Navigate to="/login" />
          ) : (
              user.userType==="admin" ? (
                <Navigate to="/admin-landing" />
              ) : (
                <Navigate to="/landing" />
              )
            )
          }/>
      </Routes>
    </Router>
  );
};

export default App;
