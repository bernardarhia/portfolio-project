import express from "express";
import User from "../../models/Users/Users.js";
import auth from "../../middleware/auth.js";
const router = express.Router();
//Status Codes
//200=Ok!
//201=Something has been Created!
//400=Bad Request!
//500=INTERNAL server error
//404=When something is not found

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
export default router;
