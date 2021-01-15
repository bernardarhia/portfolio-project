const mongoose = require('mongoose')
const validator = require('validator')

/*
-- This is not the user's account info. 
-- This should be the account that will be added to the user's portfolio incase the user fills it out
It includes:
*facebook
*instagram
*twitter
*github
*linkedin
*pinterest
*Email
*Blog url
All this data should have a type of URL. We will just take the url of the provided accounts
*/
const userContact=new mongoose.Schema({
    facebook:{
        type: URL,
        trim: true,
      },
})

const accountInfo = mongoose.model("userContactInfo", userContact);
module.exports =  accountInfo;