import React, { useState } from 'react';
import { TextField, Button, Typography, Paper, Grid, Snackbar, IconButton } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { Delete } from '@material-ui/icons'; // Import the delete icon
import axios from 'axios';

const AddEventForm = () => {
  const [formData, setFormData] = useState({
    image: '',
    id: '',
    type: '',
    description: ''
  });
  const [notificationOpen, setNotificationOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setFormData({ ...formData, image: reader.result });
      setNotificationOpen(true); // Display notification
    };
  };

  const handleDeleteImage = () => {
    setFormData({ ...formData, image: '' });
  };

  const handleCloseNotification = () => {
    setNotificationOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/events', formData);

      console.log('Event added successfully:', response.data);
      alert("New Event Created");
      setFormData({
        image: '',
        id: '',
        type: '',
        description: ''
      });
    } catch (error) {
      console.error('Error adding event:', error);
    }
  };

  return (
    <Grid container justify="center" alignItems="center" style={{ height: '100vh' }}>
      <Grid item xs={12} sm={8} md={6} lg={4}>
        <div style={{ border: '2px solid yellow', padding: '20px' }}> {/* Yellow border */}
          <Paper elevation={3} style={{ padding: '20px' }}>
            <Typography variant="h5" align="center" gutterBottom>
              Add Event
            </Typography>
            <form onSubmit={handleSubmit}>
              <input
                accept="image/*"
                id="image-input"
                type="file"
                style={{ display: 'none' }}
                onChange={handleImageChange}
              />
              <label htmlFor="image-input">
                <Button
                  variant="outlined"
                  color="primary"
                  component="span"
                  fullWidth
                  style={{ marginBottom: '20px' }}
                >
                  Upload Image
                </Button>
              </label>
              {formData.image && (
                <div style={{ position: 'relative' }}>
                  <img
                    src={formData.image}
                    alt="Uploaded Image"
                    style={{ width: '100%', marginBottom: '20px' }}
                  />
                  <IconButton
                    style={{ position: 'absolute', top: '5px', right: '5px', color: 'red' }}
                    onClick={handleDeleteImage}
                  >
                    <Delete />
                  </IconButton>
                </div>
              )}
              <Snackbar
                open={notificationOpen}
                autoHideDuration={6000}
                onClose={handleCloseNotification}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
              >
                <Alert onClose={handleCloseNotification} severity="info">
                  Image uploaded successfully!
                </Alert>
              </Snackbar>
              <TextField
                label="ID"
                variant="outlined"
                fullWidth
                margin="normal"
                name="id"
                value={formData.id}
                onChange={handleChange}
              />
              <TextField
                label="Type"
                variant="outlined"
                fullWidth
                margin="normal"
                name="type"
                value={formData.type}
                onChange={handleChange}
              />
              <TextField
                label="Description"
                variant="outlined"
                fullWidth
                margin="normal"
                multiline
                rows={4}
                name="description"
                value={formData.description}
                onChange={handleChange}
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                size="large"
                style={{ backgroundColor: 'yellow' }} // Yellow color
              >
                Add Event
              </Button>
            </form>
          </Paper>
        </div>
      </Grid>
      <footer className="bg-light p-2 text-center">
        <div className="container">
          <p className="text-warning">All Right Reserved By @ThingsToDo</p>
        </div>
      </footer>
    </Grid>
    
  );
};

export default AddEventForm;
