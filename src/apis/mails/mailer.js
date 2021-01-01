import dotenv from "dotenv"
import sgMail  from "@sendgrid/mail";
import Testers from "../models/Users/Waitlist.js";
dotenv.config();
const sgApiKey = process.env.SENDGRID_KEY;
sgMail.setApiKey(sgApiKey);


const waitListEmail=(email,name)=>{
    const msg = {
        to: email, // Change to your recipient
        from: "developersavenue@gmail.com", // Change to your verified sender
        subject: 'Success WaitList Confirmation!!',
        text:`We Thank You ${name} For Accepting To Join Our BETA Testers For The Upcoming PORTFOLIO project.We Will Keep You Upadted As Promised.Cheese!`, 
      };
      sgMail.send(msg)

}

const sendToBetaTesters=()=>{
    try{
    for(tester of Testers){
        const msg = {
        to: email, // Change to your recipient
        from: "developersavenue@gmail.com", // Change to your verified sender
        subject: 'BETA Testing Alert!!',
        text:`Hello ${name} We Wanted To Inform You On The Date Our First Version Of The Portfolio App Will Be Available Online.As Promised,You Are As A Part Of Our Testers,Your Responsibility As A Tester Is Simple,You Are Expected To Test All The Routes Of the application And Report All Errors And Malfunctions Foud Withing The App To  Our Adminstrators Through This Same E-mail,This Is Necessary So As To Prevent Buggy Apps From Hitting Our Clients.We Hope To Hear From You Soon,Happy Surfing!!!! Oh Less We should Forget,The date Is bla bla bla........`, 
      };
      sgMail.send(msg)

    }
    }catch(e){
        return e
    }

}
export default waitListEmail;