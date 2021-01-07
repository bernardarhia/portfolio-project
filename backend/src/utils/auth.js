const jwt = require('jsonwebtoken');
const dotenv =  require('dotenv')
const User = require('../models/Users/Users.js')
dotenv.config()


const auth= async (req,res,next)=>{
    try{
        const token=req.header('Authorization').replace('Bearer ','')
        const decoded=jwt.verify(token,process.env.JWT_SEC)
        const user=await User.findOne({_id:decoded._id,'userTokens.token':token})
        if(!user){
            throw new Error()
            // The error will be catched ,dont worry.
        }
        req.user=user
        req.token=token
        next()
    }
    catch(e){
        res.status(401).send({error:'Please login'})
    }

}

module.exports = auth;