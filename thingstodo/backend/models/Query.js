const mongoose = require('mongoose');

// Define a schema for the query form
const querySchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    trim: true,
    minlength: 3,
    maxlength: 50
  },
  firstName: {
    type: String,
    required: true,
    trim: true,
    // validate: {
    //   validator: (value) => /^[a-zA-Z\s]+$/.test(value),
    //   message: props => `${props.value} is not a valid first name. First name should only contain alphabets and spaces.`
    // },
    minlength: 2,
    maxlength: 50
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
    // validate: {
    //   validator: (value) => /^[a-zA-Z\s]+$/.test(value),
    //   message: props => `${props.value} is not a valid last name. Last name should only contain alphabets and spaces.`
    // },
    minlength: 2,
    maxlength: 50
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
  },
  phoneNumber: {
    type: String,
    required: true,
    trim: true,
    match: [/^\d{10}$/, 'Please enter a valid 10-digit phone number']
  },
  query: {
    type: String,
    required: false,
    trim: true,
    // minlength: 10,
    maxlength: 500
  },
  admin:{
    type : String,
    required: false,
    trim : true,
    // minlength : 10,
    maxlength : 500
  },
  flag:{
    type:String,
    required: false,
  }

});

// Create a model for the query schema
const Query = mongoose.model('Query', querySchema);

module.exports = Query;
