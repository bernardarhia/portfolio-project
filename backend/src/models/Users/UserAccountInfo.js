const mongoose = require('mongoose')
const validator = require('validator')


const userContact=new mongoose.Schema({
    facebook:{
        type: URL,
        required: true,
        trim: true,
      }
      //u told me to stop here.

})

const accountInfo = mongoose.model("userContactInfo", userContact);
module.exports =  accountInfo;