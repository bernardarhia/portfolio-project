// userContactInfo
import mongoose  from "mongoose";
import validator from 'validator'

const userContact=new mongoose.Schema({
    facebook:{
        type: URL,
        required: true,
        trim: true,
      }
      //u told me to stop here.

})

const accountInfo = mongoose.model("userContactInfo", userContact);
export default  accountInfo;