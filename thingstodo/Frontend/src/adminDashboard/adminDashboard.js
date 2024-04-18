import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table } from 'react-bootstrap';
import './adminDashboard.css';

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('https://thingstodo-zdio.onrender.com/users');
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error.message);
      }
    };

    fetchUsers();
  }, []);
  const handleLogout = () => {
    sessionStorage.removeItem('user');
    sessionStorage.removeItem('userType');
    alert("Logout successful!");
  };
  return (
    <div className='bg-warning' style={{ height: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/css/bootstrap.min.css"
        rel="stylesheet"
      />
      {/* <!-- Bootstrap Icons CSS --> */}
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css"
        rel="stylesheet"
      />
      {/* <!-- Custom CSS --> */}
      <link href="css/styles.css" rel="stylesheet" />
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
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
                <a className="nav-link" href="/admin-dashboard">
                  Dashboard
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/add-event">
                  Add Event
                </a>
              </li>
              <li className="nav-item">
              <a className="nav-link" href="/admin-query">
                  Querries
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/booking-list">
                  Bookings
                </a>
              </li>
           
              <li className="nav-item">
                <a className="nav-link" href="/login" onClick={handleLogout}>
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container top bg-warning" >
        <h4 className="text-center" style={{fontWeight:'bold'}}>Registered Users</h4>
        <div className="d-flex justify-content-center"> 
          <div className="col-md-8">
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Type</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr key={index}>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>{user.type}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;

