const mongoose = require('mongoose');

// Define a schema for the "Book Now" data
const bookNowSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    validate: {
      validator: (value) => /^[a-zA-Z\s]+$/.test(value), // Validation for alphabets and spaces only
      message: props => `${props.value} is not a valid first name. First name should only contain alphabets and spaces.`
    }
  },
  lastName: {
    type: String,
    required: true,
    validate: {
      validator: (value) => /^[a-zA-Z\s]+$/.test(value), // Validation for alphabets and spaces only
      message: props => `${props.value} is not a valid last name. Last name should only contain alphabets and spaces.`
    }
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value), // Basic email format validation
      message: props => `${props.value} is not a valid email address.`
    }
  },
  phoneNumber: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: (value) => /^\d{10}$/.test(value), // Validation for exactly 10 digits
      message: props => `${props.value} is not a valid phone number. Phone number should consist of exactly 10 digits.`
    }
  },
  type: {
    type: String,
    required: true
  }
});

// Create a model for the "Book Now" schema
const BookNow = mongoose.model('BookNow', bookNowSchema);

module.exports = BookNow;
