// import React, { useState ,useEffect} from "react";
// import {
//   TextField,
//   Button,
//   Typography,
//   Paper,
//   Grid,
//   Snackbar,
// } from "@material-ui/core";
// import { Alert } from "@material-ui/lab";
// import axios from "axios";

// const QueryForm = () => {
//   const [queries, setQueries] = useState([]);
//   const [formData, setFormData] = useState({
//     username: sessionStorage.getItem('user'),
//     firstName: "",
//     lastName: "",
//     email: "",
//     phoneNumber: "",
//     query: "",
//     admin:""
//   });
//   const [notificationOpen, setNotificationOpen] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//  useEffect(() => {
//     fetchQueries();
//   }, []);

//   // const fetchQueries = async () => {
//   //   try {
//   //     const response = await axios.get("http://localhost:4000/queries-getall");
//   //     // Filter out queries with flag="false"
//   //     setQueries(response.data);
      
//   //   } catch (error) {
//   //     console.error("Error fetching queries:", error);
//   //   }
//   // };


//   const fetchQueries = async () => {
//     try {
//       const response = await axios.get("http://localhost:4000/queries-getall");
//       const matchingQuery = response.data.find((query) => query.username === formData.username);
//       if (matchingQuery) {
//         setFormData({
//           username: matchingQuery.username,
//           firstName: matchingQuery.firstName,
//           lastName: matchingQuery.lastName,
//           email: matchingQuery.email,
//           phoneNumber: matchingQuery.phoneNumber,
//           query: matchingQuery.query,
//           admin:matchingQuery.admin
//         });
//       }
//       setQueries(response.data);
//     } catch (error) {
//       console.error("Error fetching queries:", error);
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post(
//         "http://localhost:4000/submitquery",
//         formData
//       );

//       console.log("Query submitted successfully:", response.data);
//       alert("Query Submitted");
//       setFormData({
//         username: "",
//         firstName: "",
//         lastName: "",
//         email: "",
//         phoneNumber: "",
//         query: "",
//       });
//     } catch (error) {
//       console.error("Error submitting query:", error);
//     }
//   };

//   return (
//     <div>
//       <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
//         <div className="container">
//           <a className="navbar-brand" href="#">
//             <span className="text-warning">Things</span>ToDO
//           </a>
//           <button
//             className="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarSupportedContent"
//             aria-controls="navbarSupportedContent"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className="collapse navbar-collapse" id="navbarSupportedContent">
//             <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
//               <li className="nav-item">
//                 <a className="nav-link" href="#">
//                   Home
//                 </a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link" href="#">
//                   About
//                 </a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link" href="#">
//                   Services
//                 </a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link" href="#">
//                   Contact
//                 </a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link" href="#">
//                   Team
//                 </a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link" href="/login">
//                   Logout
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>
//       <Grid
//         container
//         justify="center"
//         alignItems="center"
//         style={{ height: "100vh" }}
//         className="bg-warning"
//       >
//         <Grid item xs={12} sm={8} md={6} lg={4}>
//           <div style={{ border: "2px solid yellow", padding: "20px" }}>
//             <Paper elevation={3} style={{ padding: "30px" }}>
//               <Typography variant="h5" align="center" gutterBottom>
//                 Submit a Query
//               </Typography>
//               <form onSubmit={handleSubmit}>
//                 <TextField
//                   label="Username"
//                   variant="outlined"
//                   fullWidth
//                   margin="normal"
//                   name="username"
//                   value={formData.username}
//                   onChange={handleChange}
//                   disabled
//                 />
//                 <TextField
//                   label="First Name"
//                   variant="outlined"
//                   fullWidth
//                   margin="normal"
//                   name="firstName"
//                   value={formData.firstName}
//                   onChange={handleChange}
//                 />
//                 <TextField
//                   label="Last Name"
//                   variant="outlined"
//                   fullWidth
//                   margin="normal"
//                   name="lastName"
//                   value={formData.lastName}
//                   onChange={handleChange}
//                 />
//                 <TextField
//                   label="Email"
//                   variant="outlined"
//                   fullWidth
//                   margin="normal"
//                   type="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                 />
//                 <TextField
//                   label="Phone Number"
//                   variant="outlined"
//                   fullWidth
//                   margin="normal"
//                   type="tel"
//                   name="phoneNumber"
//                   value={formData.phoneNumber}
//                   onChange={handleChange}
//                 />
//                 <TextField
//                   label="Query"
//                   variant="outlined"
//                   fullWidth
//                   margin="normal"
//                   multiline
//                   rows={4}
//                   name="query"
//                   value={formData.query}
//                   onChange={handleChange}
//                 />
//                 <TextField
//                   label="Admin Response"
//                   variant="outlined"
//                   fullWidth
//                   margin="normal"
//                   name="admin"
//                   value={formData.admin}
//                   // value="Admin response will be displayed here"
//                   disabled
//                 />

//                 <Button
//                   type="submit"
//                   variant="contained"
//                   color="primary"
//                   fullWidth
//                   size="large"
//                   style={{ backgroundColor: "ORANGE" }}
//                 >
//                   Submit Query
//                 </Button>
//               </form>
//             </Paper>
//           </div>
//         </Grid>
//       </Grid>
//     </div>
//   );
// };

// export default QueryForm;
// import React, { useState, useEffect } from "react";
// import {
//   TextField,
//   Button,
//   Typography,
//   Paper,
//   Grid,
//   Snackbar,
// } from "@material-ui/core";
// import { Alert } from "@material-ui/lab";
// import axios from "axios";

// const QueryForm = () => {
//   const [queries, setQueries] = useState([]);
//   const initialFormData = {
//     username: sessionStorage.getItem("user"),
//     firstName: "",
//     lastName: "",
//     email: "",
//     phoneNumber: "",
//     query: "",
//     admin: "",
//   };
//   const [formData, setFormData] = useState(initialFormData);
//   const [notificationOpen, setNotificationOpen] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleReset = () => {
//     setFormData(initialFormData);
//   };

//   useEffect(() => {
//     fetchQueries();
//   }, []);

//   const fetchQueries = async () => {
//     try {
//       const response = await axios.get("http://localhost:4000/queries-getall");
//       const matchingQuery = response.data.find(
//         (query) => query.username === formData.username
//       );
//       if (matchingQuery) {
//         setFormData({
//           username: matchingQuery.username,
//           firstName: matchingQuery.firstName,
//           lastName: matchingQuery.lastName,
//           email: matchingQuery.email,
//           phoneNumber: matchingQuery.phoneNumber,
//           query: matchingQuery.query,
//           admin: matchingQuery.admin,
//         });
//       }
//       setQueries(response.data);
//     } catch (error) {
//       console.error("Error fetching queries:", error);
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post(
//         "http://localhost:4000/submitquery",
//         formData
//       );

//       console.log("Query submitted successfully:", response.data);
//       alert("Query Submitted");
//       setFormData(initialFormData);
//     } catch (error) {
//       console.error("Error submitting query:", error);
//     }
//   };

//   return (
//     <div>
//       <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
//         <div className="container">
//           <a className="navbar-brand" href="#">
//             <span className="text-warning">Things</span>ToDO
//           </a>
//           <button
//             className="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarSupportedContent"
//             aria-controls="navbarSupportedContent"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div
//             className="collapse navbar-collapse"
//             id="navbarSupportedContent"
//           >
//             <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
//               <li className="nav-item">
//                 <a className="nav-link" href="#">
//                   Home
//                 </a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link" href="#">
//                   About
//                 </a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link" href="#">
//                   Services
//                 </a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link" href="#">
//                   Contact
//                 </a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link" href="#">
//                   Team
//                 </a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link" href="/login">
//                   Logout
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>
//       <Grid
//         container
//         justify="center"
//         alignItems="center"
//         style={{ height: "100vh" }}
//         className="bg-warning"
//       >
//         <Grid item xs={12} sm={8} md={6} lg={4}>
//           <div style={{ border: "2px solid yellow", padding: "20px" }}>
//             <Paper elevation={3} style={{ padding: "30px" }}>
//               <Typography variant="h5" align="center" gutterBottom>
//                 Submit a Query
//               </Typography>
//               <form onSubmit={handleSubmit}>
//                 <TextField
//                   label="Username"
//                   variant="outlined"
//                   fullWidth
//                   margin="normal"
//                   name="username"
//                   value={formData.username}
//                   onChange={handleChange}
//                   disabled
//                 />
//                 <TextField
//                   label="First Name"
//                   variant="outlined"
//                   fullWidth
//                   margin="normal"
//                   name="firstName"
//                   value={formData.firstName}
//                   onChange={handleChange}
//                 />
//                 <TextField
//                   label="Last Name"
//                   variant="outlined"
//                   fullWidth
//                   margin="normal"
//                   name="lastName"
//                   value={formData.lastName}
//                   onChange={handleChange}
//                 />
//                 <TextField
//                   label="Email"
//                   variant="outlined"
//                   fullWidth
//                   margin="normal"
//                   type="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                 />
//                 <TextField
//                   label="Phone Number"
//                   variant="outlined"
//                   fullWidth
//                   margin="normal"
//                   type="tel"
//                   name="phoneNumber"
//                   value={formData.phoneNumber}
//                   onChange={handleChange}
//                 />
//                 <TextField
//                   label="Query"
//                   variant="outlined"
//                   fullWidth
//                   margin="normal"
//                   multiline
//                   rows={4}
//                   name="query"
//                   value={formData.query}
//                   onChange={handleChange}
//                 />
//                 <TextField
//                   label="Admin Response"
//                   variant="outlined"
//                   fullWidth
//                   margin="normal"
//                   name="admin"
//                   value={formData.admin}
//                   // value="Admin response will be displayed here"
//                   disabled
//                 />

//                 <Button
//                   type="submit"
//                   variant="contained"
//                   color="primary"
//                   fullWidth
//                   size="large"
//                   style={{ backgroundColor: "ORANGE" }}
//                 >
//                   Submit Query
//                 </Button>
//                 <Button
//                   variant="contained"
//                   color="secondary"
//                   fullWidth
//                   size="large"
//                   style={{ marginTop: "10px" }}
//                   onClick={handleReset}
//                 >
//                   Reset Form
//                 </Button>
//               </form>
//             </Paper>
//           </div>
//         </Grid>
//       </Grid>
//     </div>
//   );
// };

// export default QueryForm;

import React, { useState ,useEffect} from "react";
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

const QueryForm = () => {
  const [queries, setQueries] = useState([]);
  const [formData, setFormData] = useState({
    username: sessionStorage.getItem('user'),
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    query: "",
    admin:""
  });
  const [notificationOpen, setNotificationOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  useEffect(() => {
    fetchQueries();
  }, []);
  const handleLogout = () => {
    sessionStorage.removeItem('user');
    sessionStorage.removeItem('userType');
    alert("Logout successful!");
  };
  const fetchQueries = async () => {
    try {
      const response = await axios.get("https://thingstodo-zdio.onrender.com/queries-getall");
      const matchingQuery = response.data.find((query) => query.username === formData.username);
      if (matchingQuery) {
        setFormData({
          username: matchingQuery.username,
          firstName: matchingQuery.firstName,
          lastName: matchingQuery.lastName,
          email: matchingQuery.email,
          phoneNumber: matchingQuery.phoneNumber,
          query: matchingQuery.query,
          admin:matchingQuery.admin
        });
      }
      setQueries(response.data);
    } catch (error) {
      console.error("Error fetching queries:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://thingstodo-zdio.onrender.com/submitquery",
        formData
      );

      console.log("Query submitted successfully:", response.data);
      alert("Query Submitted");
      setFormData({
        username: sessionStorage.getItem('user'),
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        query: "",
      });
    } catch (error) {
      console.error("Error submitting query:", error);
    }
  };

  const handleReset = async () => {
    try {
      const response = await axios.delete(`https://thingstodo-zdio.onrender.com/${formData.username}`);
      console.log("Query deleted successfully:", response.data);
      alert("Form Reset");
      fetchQueries();
      setFormData({
        username: sessionStorage.getItem('user'),
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        query: "",
      });
    } catch (error) {
      console.error("Error deleting query:", error);
    }
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
                <a className="nav-link" href="/landing">
                  Home
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
                Submit a Query
              </Typography>
              <form onSubmit={handleSubmit} onReset={handleReset}>
                <TextField
                  label="Username"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  disabled
                />
                <TextField
                  label="First Name"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                />
                <TextField
                  label="Last Name"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                />
                <TextField
                  label="Email"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                <TextField
                  label="Phone Number"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                />
                <TextField
                  label="Query"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  multiline
                  rows={4}
                  name="query"
                  value={formData.query}
                  onChange={handleChange}
                />
                <TextField
                  label="Admin Response"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  name="admin"
                  value={formData.admin}
                  // value="Admin response will be displayed here"
                  disabled
                />

                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                  size="large"
                  style={{ backgroundColor: "ORANGE" }}
                >
                  Submit Query
                </Button>
                <Button
                  type="reset"
                  variant="outlined"
                  color="secondary"
                  fullWidth
                  size="large"
                  style={{ marginTop: "10px" }}
                >
                  Reset Form
                </Button>
              </form>
            </Paper>
          </div>
        </Grid>
      </Grid>
      <footer className="bg-light p-2 text-center">
        <div className="container">
          <p className="text-warning">All Right Reserved By <span style={{ color: 'black', fontWeight:'bold' }}>@ThingsToDo</span> </p>
        </div>
      </footer>
    </div>
  );
};

export default QueryForm;
