const mongoose = require('mongoose');
const validator = require('validator');


const Waiter = new mongoose.Schema(
    {
      name: {
        type: String,
        required: true,
        trim: true,
        validate:(value)=>{
          if(value.length<2){
              throw new Error('Firstname should be at least 2 characters long')
          }
  
        }
      },
     
      email: {
        type: String,
        required: true,
        validate: (value) => {
          if (!validator.isEmail(value)) {
            throw new Error("Email Is Not Valid");
          }
          
        },
        trim: true,
        lowercase: true,
      }
    })

const waitingModel = mongoose.model("waitList", Waiter);

module.exports = waitingModel;