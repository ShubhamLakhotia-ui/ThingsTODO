import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import './booknow.css'; // Import your CSS file for custom styles
// import { loadStripe } from '@stripe/stripe-js';
const BookNow = () => {
    const location = useLocation();
    const [result, setResult] = React.useState("");
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        type: location.state.type, // Pre-fill type from the landing page
    });

    const onSubmit = async (event) => {
          event.preventDefault();
          setResult("Sending....");
          const formData = new FormData(event.target);
      
          formData.append("access_key", "95fac8ca-c8f4-4fa7-82f8-20150befe750");
      
          const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
          });
          const data = await response.json();
      
          if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
          } else {
            console.log("Error", data);
            setResult(data.message);
          }
      
          handleSubmit(event);
        };

    const handleSubmit = async (e) => {
        e.preventDefault();
     
        try {
          // Make a POST request to the backend API
          const response = await axios.post('https://thingstodo-zdio.onrender.com/booknow', formData);
          console.log(response.data); // Log the response from the backend
          alert("Booking created successfully!"); // Show a success message
        } catch (error) {
          console.error("Booking Error:", error);
          alert("Error creating booking. Please try again."); // Show an error message
        }
  

        // Reset form data after submission
        setFormData({
            firstName: '',
            lastName: '',
            email: '',
            phoneNumber: '',
            type: location.state.type, // Reset type after form submission
        });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
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
            <div className="bg-warning" style={{height:"100vh"}}>
                <section className="book-now section-padding" id="book-now" style={{ marginTop: '80px' }}>
                    <div className="container">
                        <div className="row justify-content-center align-items-center">
                            <div className="col-md-6">
                                <div className="card">
                                    <div className="card-body">
                                        <h2 className="card-title text-center">Book <span className='text-warning'>Now</span></h2>
                                        <form onSubmit={onSubmit}>
                                            <div className="mb-3">
                                                <label htmlFor="firstName" className="form-label">First Name</label>
                                                <input type="text" className="form-control" id="firstName" name="firstName" value={formData.firstName} onChange={handleInputChange} required />
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="lastName" className="form-label">Last Name</label>
                                                <input type="text" className="form-control" id="lastName" name="lastName" value={formData.lastName} onChange={handleInputChange} required />
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="email" className="form-label">Email</label>
                                                <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleInputChange} required />
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
                                                <input type="tel" className="form-control" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleInputChange} required />
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="type" className="form-label">Type</label>
                                                <input type="text" className="form-control" id="type" name="type" value={formData.type} onChange={handleInputChange} required readOnly />
                                            </div>
                                            <button type="submit" className="btn btn-primary bg-warning">Book Now</button>
                                        </form>
                                        <span>{result}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="image-container">
                                    <img src={`data:image/png;base64,${location.state.image.data}`} className="rounded mx-auto d-block smaller-image" alt="Experience" />
                                    <div className="image-details">
                                        <p> {location.state.description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <footer className="bg-light p-2 text-center">
                <div className="container">
                    <p className="text-warning">All Right Reserved By @ThingsToDo</p>
                </div>
            </footer>
        </div>
    );
};

export default BookNow;

// import React, { useState } from 'react';
// import { useLocation } from 'react-router-dom';
// import axios from 'axios';
// import './booknow.css'; // Import your CSS file for custom styles

// imported for payment integration
// import { loadStripe } from '@stripe/stripe-js';

// const BookNow = () => {

//   const location = useLocation();
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     phoneNumber: '',
//     type: location.state.type, // Pre-fill type from the landing page
//   });

//   const [result, setResult] = React.useState("");

//   const onSubmit = async (event) => {
//     event.preventDefault();
//     setResult("Sending....");
//     const formData = new FormData(event.target);

//     formData.append("access_key", "95fac8ca-c8f4-4fa7-82f8-20150befe750");

//     const response = await fetch("https://api.web3forms.com/submit", {
//       method: "POST",
//       body: formData
//     });
//     const data = await response.json();

//     if (data.success) {
//       setResult("Form Submitted Successfully");
//       event.target.reset();
//     } else {
//       console.log("Error", data);
//       setResult(data.message);
//     }

//     handleSubmit(event);
//   };

//     const handleSubmit = async (e) => {
//       e.preventDefault();
//       try {
//         // Make a POST request to the backend API
//         const response = await axios.post('https://thingstodo-zdio.onrender.com/booknow', formData);
//         console.log(response.data); // Log the response from the backend
//         alert("Booking created successfully!"); // Show a success message
//       } catch (error) {
//         console.error("Booking Error:", error);
//         alert("Error creating booking. Please try again."); // Show an error message
//       }

//       // Reset form data after submission
//       setFormData({
//         firstName: '',
//         lastName: '',
//         email: '',
//         phoneNumber: '',
//         type: '', // Reset type after form submission
//       });
//     };

//     const handleInputChange = (e) => {
//       const { name, value } = e.target;
//       setFormData({
//         ...formData,
//         [name]: value
//       });
//     };

//     return (
//       <div>
//         <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
//           <div className="container">
//             <a className="navbar-brand" href="#">
//               <span className="text-warning">Things</span>ToDO
//             </a>
//             <button
//               className="navbar-toggler"
//               type="button"
//               data-bs-toggle="collapse"
//               data-bs-target="#navbarSupportedContent"
//               aria-controls="navbarSupportedContent"
//               aria-expanded="false"
//               aria-label="Toggle navigation"
//             >
//               <span className="navbar-toggler-icon"></span>
//             </button>
//             <div className="collapse navbar-collapse" id="navbarSupportedContent">
//               <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
//                 <li className="nav-item">
//                   <a className="nav-link" href="#">
//                     Home
//                   </a>
//                 </li>
//                 <li className="nav-item">
//                   <a className="nav-link" href="#">
//                     About
//                   </a>
//                 </li>
//                 <li className="nav-item">
//                   <a className="nav-link" href="#">
//                     Services
//                   </a>
//                 </li>
//                 <li className="nav-item">
//                   <a className="nav-link" href="#">
//                     Contact
//                   </a>
//                 </li>
//                 <li className="nav-item">
//                   <a className="nav-link" href="#">
//                     Team
//                   </a>
//                 </li>
//                 <li className="nav-item">
//                   <a className="nav-link" href="/login">
//                     Logout
//                   </a>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </nav>
//         <section className="book-now section-padding" id="book-now" style={{ marginTop: '80px', backgroundColor: 'yellow' }}>
//           <div className="container">
//             <div className="row justify-content-center align-items-center">
//               <div className="col-md-6">
//                 <div className="card">
//                   <div className="card-body">
//                     <h2 className="card-title text-center">Book Now</h2>
//                     <form onSubmit={(e) => { handleSubmit(e); onSubmit(e); }}>
//                       <div className="mb-3">
//                         <label htmlFor="firstName" className="form-label">First Name</label>
//                         <input type="text" className="form-control" id="firstName" name="firstName" value={formData.firstName} onChange={handleInputChange} required />
//                       </div>
//                       <div className="mb-3">
//                         <label htmlFor="lastName" className="form-label">Last Name</label>
//                         <input type="text" className="form-control" id="lastName" name="lastName" value={formData.lastName} onChange={handleInputChange} required />
//                       </div>
//                       <div className="mb-3">
//                         <label htmlFor="email" className="form-label">Email</label>
//                         <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleInputChange} required />
//                       </div>
//                       <div className="mb-3">
//                         <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
//                         <input type="tel" className="form-control" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleInputChange} required />
//                       </div>
//                       <div className="mb-3">
//                         <label htmlFor="type" className="form-label">Type</label>
//                         <input type="text" className="form-control" id="type" name="type" value={formData.type} onChange={handleInputChange} required readOnly />
//                       </div>
//                       <button type="submit" className="btn btn-primary">Book Now</button>
//                     </form>
//                     <span>{result}</span>
//                   </div>
//                 </div>
//               </div>
//               <div className="col-md-6">
//                 <div className="image-container">
//                   <img src={`data:image/png;base64,${location.state.image.data}`} className="rounded mx-auto d-block smaller-image" alt="Experience" />
//                   <div className="image-details">
//                     <p> {location.state.description}</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//       </div>
//     );
//   };

//   export default BookNow;


