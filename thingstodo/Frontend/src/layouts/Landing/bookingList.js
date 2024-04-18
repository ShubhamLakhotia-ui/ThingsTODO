import React,{useEffect, useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import "./bookingList.css";
const BookingList = () => {
    const navigate = useNavigate();
    const [bookings,setBookings]=useState([])

    useEffect(() => {
        axios
          .get("http://localhost:4000/booknow-getall")
          .then((response) => {
            setBookings(response.data);
          })
          .catch((error) => {
            console.error("Error fetching images:", error);
          });
      },[]);
  return (
    <div>
         <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top ">
        <div className="container">
          <a className="navbar-brand" href="#">
            <span className="text-warning">Things</span>ToDO
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="/admin-landing">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/add-event">
                  Add Event
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Querries
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/booking-list">
                  Bookings
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/login">
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/home">Home</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/job-listings">Job Listing</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact Us</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/companies">Companies</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/" onClick={handleLogout} style={{ color: '#FFA500' }}>Logout</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav> */}
      <div className="container mt-5" style={{marginTop:"5rem !important"}}>
        <h1 className="text-center mb-4">Booking<span className="text-warning"> Listing</span> </h1>
        {bookings.map(job => (
          <div className="card mb-4 bg-warning" key={job.email} style={{ backgroundColor: 'orange' }}>
            <div className="card-body">
              <h3 className="card-title">Type : {job.type}</h3>
              <p className="card-text"><span style={{fontWeight:"bold"}}>Email : </span>{ job.email}</p>
              <p className="card-text"><span style={{fontWeight:"bold"}}>First Name : </span>{ job.firstName}</p>
              <p className="card-text"><span style={{fontWeight:"bold"}}>Last Name : </span>{ job.lastName}</p>
              <p className="card-text"><span style={{fontWeight:"bold"}}>Phone Number : </span>{ job.phoneNumber}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default BookingList;
