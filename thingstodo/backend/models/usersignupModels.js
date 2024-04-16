const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
// const User = require('./models/usersignupModels'); 

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: [true, "Please enter user name"],
        unique: true,
        trim: true,
        minlength: [3, "Username must be at least 3 characters long"]
    },
    email: {
        type: String,
        unique: true,
        required: [true,'Email address is required'],
        match: [/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    password: {
        type: String,
        minlength: [8, 'Password is too weak'],
        required: [true, 'Password is required'],
        validate: {
          validator: function(value) {
            return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*]{8,}$/.test(value); 
          },
          message: 'Password should include at least 1 uppercase letter, 1 digit, and 1 special character'
        }
      },
    
    type: {
        type: String,
        enum: ['user', 'admin'], // Assuming 'type' should include user types as mentioned
        required: true,
        default: 'user'
    }
});

// Middleware to hash the password before saving it to the database
userSchema.pre('save', async function(next) {
    if (this.isModified('password')) {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
    }
    next();
});

// Instance method to compare passwords
userSchema.methods.comparePassword = async function(candidatePassword) {
    return await bcrypt.compare(candidatePassword, this.password);
};

const User = mongoose.model('User', userSchema);

module.exports = User;
