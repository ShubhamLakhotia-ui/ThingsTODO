

import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

function AddEventPage() {
  const [userId, setUserId] = useState('');
  const [type, setType] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertType, setAlertType] = useState('');
  const [alertMessage, setAlertMessage] = useState('');

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append('userId', userId);
      formData.append('type', type);
      formData.append('description', description);
      formData.append('image', image);

      const response = await fetch('http://localhost:4000/thingstodo/add-event', {
        method: 'POST',
        body: formData
      });

      if (!response.ok) {
        throw new Error('Failed to add event');
      }

      console.log('Event added successfully');
      
      // Clear all the fields by resetting the state variables
      setUserId('');
      setType('');
      setDescription('');
      setImage(null);

      // Set alert details for success
      setAlertVisible(true);
      setAlertType('success');
      setAlertMessage('Event added successfully');

      // Optionally, redirect the user to another page or show a success message
    } catch (error) {
      console.error('Error adding event:', error.message);
      // Handle error appropriately, such as displaying an error message to the user
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
                <a className="nav-link" href="#">
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
      <Container className="d-flex justify-content-center align-items-center bg-warning" style={{ minHeight: '100vh',minWidth:'100%' }}>
        <div className="p-4 rounded" style={{ backgroundColor: 'white', maxWidth: '500px', width: '100%' }}>
          <h2 className="mb-4" style={{textAlign:"center"}}>Add Event</h2>
          {alertVisible && (
            <div className="modal-background">
              <div className={`alert alert-${alertType}`} role="alert">
                {alertMessage}
                <button type="button" className="btn-close" aria-label="Close" onClick={() => setAlertVisible(false)}></button>
              </div>
            </div>
          )}
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formUserId">
              <Form.Label>User ID</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter user ID"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formType">
              <Form.Label>Type</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter type"
                value={type}
                onChange={(e) => setType(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formImage">
              <Form.Label>Image</Form.Label>
              <Form.Control
                type="file"
                onChange={handleImageChange}
              />
            </Form.Group>
            <br></br>
            <div className="d-flex justify-content-center">
              <Button variant="warning" type="submit">
                Submit
              </Button>
            </div>
          </Form>
        </div>
      </Container>
    </div>
  );
}

export default AddEventPage;
