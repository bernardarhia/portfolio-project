require('dotenv').config()
const router = require('express').Router()
const sgMail = require('@sendgrid/mail')
const User = require('../models/Users/Users')
const WaitList = require('../models/Users/Waitlist')
const waitListEmail = require('../mails/mailer')
const auth = require('../utils/auth')


sgMail.setApiKey(process.env.SENDGRID_KEY)


router.get('/', (req, res, next) => {
    res.status(200).send('Welcome and Hello from the team')
})

router.get("/", (req, res) => {
    res.status(200).send({ welcome: "hello" });
  });
  
  router.post("/register", async (req, res) => {
    try {
      const {
        firstName,
        lastName,
        country,
        work,
        email,
        age,
        password,
      } = req.body;
      const isMember = await User.findOne({ email });
      if (isMember) {
        res.status(400).send({ duplicateUser: "User already Exists!" });
      }
      const user = new User({
        firstName,
        lastName,
        country,
        work,
        email,
        age,
        password,
      });
  
      const newUser = await user.save();
      const currentToken = await newUser.AuhthToken();
      res.status(201).send({ newUser, currentToken });
    } catch (e) {
      res.status(400).send({ errors: [e.message] });
    }
  });
  
  router.post("/login", async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await User.loginFunc(email, password);
      const token = await user.AuhthToken();
  
      res.status(200).send({ user, token });
    } catch (e) {
      res.status(400).send({ errors: [e.message] });
    }
   
  });
  
  router.get('/me',auth,async(req,res)=>{
      try{
          const {user}=req
          res.status(200).send({authenticatedUser:user})
  
      }catch(e){
  
      }
  })
  
  router.get('/waitlist',async(req,res)=>{
      try{
          res.status(200).send({waitListPrompt:'Join our 100+ BETA testers for the portfolio project,Just drop your email under this form and stay updated!'})
  
      }catch(e){
        res.status(400).send({error:`Error accessing this route!`})
  
      }
  })
  
  // waitList GET page
  router.get('/waitlist',async(req,res)=>{
      try{
          res.status(200).send({waitListPrompt:'Join our 100+ BETA testers for the portfolio project,Just drop your email under this form and stay updated!'})
  
      }catch(e){
        res.status(400).send({error:`Error accessing this route!`})
  
      }
  })
  
  // waitList post(when user tries to join the waitLIst)
  router.post('/waitlist',async(req,res)=>{
      try{
        const {name,email}=req.body
        const alreadyWaiting=WaitList.find({email:email})
        const newWaiter= new WaitList({name,email})
        await newWaiter.save()
        waitListEmail(newWaiter.email,newWaiter.name)
        res.status(201).send({success:'We thank you for providing us with your name and email,we will keep you updated!'})
  
  
      }catch(e){
        res.status(400).send({ errors: [e.message] })
  
      }
  })
  //Sending emails to our beta testers
  router.post('/beta',async(req,res)=>{
      try{
        let counter=0
       await WaitList.count({}, function( err, count){
          counter= count
       })
  // console.log(counter)
        const testers=await WaitList.find({})
        testers.forEach(tester=>{
          const msg = {
          to: tester.email, // Change to your recipient
          from: "developersavenue@gmail.com", // Change to your verified sender
          subject: 'BETA Testing Alert!!',
          text:`Hello ${tester.name} We Wanted To Inform You On The Date Our First Version Of The Portfolio App Will Be Available Online.As Promised,You Are As A Part Of Our Testers,Your Responsibility As A Tester Is Simple,You Are Expected To Test All The Routes Of the application And Report All Errors And Malfunctions Foud Withing The App To  Our Adminstrators Through This Same E-mail,This Is Necessary So As To Prevent Buggy Apps From Hitting Our Clients.We Hope To Hear From You Soon,Happy Surfing!!!! Oh Less We should Forget,The date Is bla bla bla........`, 
        }
        sgMail.send(msg)
  
        })
        res.status(200).send({deliverSuccess:`Successfully Delievered The E-mails To All BETA Testers,A Total Of ${counter} E-mails Delivered`})
  
      } catch(e){
        res.status(400).send({ errors: [e.message] })
      }
  })


module.exports = router