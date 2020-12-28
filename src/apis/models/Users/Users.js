import dotenv from 'dotenv'
import mongoose  from "mongoose";
import validator from 'validator'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
dotenv.config()



const User = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
      validate:(value)=>{
        if(value.length<2){
            throw new Error('Firstname should be at least 2 characters long')
        }

      }
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        validate:(value)=>{
            if(value.length<2){
                throw new Error('Lastname should be at least 2 characters long')
            }
    
          }
      },
      country: {
        type: String,
        required: true,
        trim: true,
      },
      work: {
        type: String,
        required: true,
        trim: true,
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
    },
    age: {
      type: Number,
      validate: (value) => {
        if (value < 0) {
          throw new Error("Age cannot be a negative number");
        }
      },
      required: true,
      maxlength: 3,
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
        if (value.toLowerCase().includes("password")) {
          throw new Error('Password cannot be "password" or contain "password"');
        }
        // if(!validator.isAlphanumeric(value)){
        //     throw new Error('Password must only contain letters and numbers')
        // }
        
      },
      trim: true,
    },
    
    uniqueUsername: {
        type: String,
        required: true,
    },
    userTokens: [
        {
          token: {
            type: String,
            required: true,
          }
        }
      ]
  },
  { timestamps: true }
);

//Am saying before saving a user,this function should execute
User.pre('save', async function(next){
    // before saving a user
    const user=this
    //checking if password was modified by the user or nnew password was given
    if(user.isModified('password')){
        user.password=await bcrypt.hash(user.password,10)
    }
    next()
})

  //before processing login
  User.statics.loginFunc = async (email, password) => {
    const user = await userMOdel.findOne({ email: email });
    if (!user) {
      throw new Error("User Does Not Exist");
    }
    const isMAtch = await bcrypt.compare(password, user.password);
  
    if (!isMAtch) {
      throw new Error("Wrong User Password");
    }
    return user;
  
    
  };
//Token will expire in 15 minutes after generation
User.methods.AuhthToken=function(){
    const user=this
    const token=jwt.sign({_id:user._id.toString()},process.env.JWT_SEC,{expiresIn:'900000'})
    console.log(token)
    user.userTokens=user.userTokens.concat({token:token})
    user.save()
    return token
  
  }
  //anytime the server gets a request to send user Info,this is send in res,to user
  User.methods.toJSON= function(){
    const user=this
    const userObject=user.toObject()
    delete userObject.password
    delete userObject.userTokens
    //prevents user from seeing the buffer value on the avatar key on the uwser object
    return userObject
  }

  

const userMOdel = mongoose.model("users", User);
export default  userMOdel;
