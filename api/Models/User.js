const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const Template = require("../Models/TEMPLATES/Template");
const userSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: true,
    trim: true,
  }, 
  username: {
    type: String,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    validate: (value) => {
      if (!validator.isEmail(value)) {
        throw new Error("Email Is Not Valid");
      }
    },
  },
  age: {
    type: Number,
    required: true,
    maxlength:3,
    validate: (value) => {
      if (value.length < 0) {
        throw new Error("Age cannot be a negative number");
        
    }
    
    },
  },
  password: {
    type: String,
    required: true,
    validate: (value) => {
      if (value.length < 8) {
        throw new Error(
          "Password length should be at least,6(six) characters"
        );
      }
      if (value.toLowerCase().includes("password") || value.toLowerCase().includes('123456789')) {
        throw new Error('Password is too simple');
      }
      
    },
    trim: true,
  }
  
},{ timestamps: true });

const userModel=mongoose.model('users',userSchema)
module.exports=userModel
