import React, { useState, useEffect } from "react";
import {
  TextField,
  Button,
  Typography,
  Paper,
  Grid,
  Snackbar,
} from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import axios from "axios";

const AdminQueryPage = () => {
  const [queries, setQueries] = useState([]);
  const [responses, setResponses] = useState({});

  useEffect(() => {
    fetchQueries();
  }, []);

  const fetchQueries = async () => {
    try {
      const response = await axios.get("http://localhost:4000/queries-getall");
      // Filter out queries with flag="false"
      setQueries(response.data.filter(query => query.flag !== "false"));
    } catch (error) {
      console.error("Error fetching queries:", error);
    }
  };

  const handleChangeResponse = (username, value) => {
    setResponses({ ...responses, [username]: value });
  };

  const handleSubmitResponse = async (query) => {
    const encodedUsername = encodeURIComponent(query.username);
    try {
      const payload = {
        username: query.username,
        firstName: query.firstName,
        lastName: query.lastName,
        email: query.email,
        phoneNumber: query.phoneNumber,
        query: query.query,
        admin: responses[query.username] || "",
        flag: "false"
      };
  
    //   const response = await axios.put(
    //     `http://localhost:4000/editquery/${encodedUsername}`, // Encode the username to ensure URL safety
    //     payload
    //   );
       
      const response = await axios.put(
        `http://localhost:4000/editQuery`, // Encode the username to ensure URL safety
        payload
      );
   
  
      console.log("Response submitted successfully:", response.data);
      fetchQueries();
    } catch (error) {
      console.error("Error submitting response:", error);
    }
  };
  const handleLogout = () => {
    sessionStorage.removeItem('user');
    sessionStorage.removeItem('userType');
    alert("Logout successful!");
  };

  return (
    <div>
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
                <a className="nav-link" href="/login" onClick={handleLogout}>
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Grid
        container
        justify="center"
        alignItems="center"
        style={{ height: "100vh" }}
        className="bg-warning"
      >
        <Grid item xs={12} sm={8} md={6} lg={4}>
          <div style={{ border: "2px solid yellow", padding: "20px" }}>
            <Paper elevation={3} style={{ padding: "30px" }}>
              <Typography variant="h5" align="center" gutterBottom>
                Admin Panel
              </Typography>
              {queries.map((query) => (
                <div key={query.username}>
                  <Typography variant="subtitle1" gutterBottom>
                    Username: {query.username}
                  </Typography>
                  <Typography variant="subtitle1" gutterBottom>
                    Email: {query.email}
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    Query: {query.query}
                  </Typography>
                  <TextField
                    label="Admin Response"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={responses[query.username] || ""}
                    onChange={(e) =>
                      handleChangeResponse(query.username, e.target.value)
                    }
                  />
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => handleSubmitResponse(query)}
                  >
                    Submit Response
                  </Button>
                </div>
              ))}
            </Paper>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default AdminQueryPage;
