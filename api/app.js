//I cant comment in package.json so run this on start to see the frontend  by updating the package.json start's property
 //>>>>>  "start": "react-scripts start"

require('dotenv').config()
const mongoose=require('mongoose')
const express=require('express')
const app=express()
const port =4040 ||  process.env.PORT

const dbURI=process.env.DB_URI
//body-parser
app.use(express.urlencoded({extended:true}))
app.use(express.json())

//db connection
mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true,useCreateIndex:true })
  .then((connected) => {
    console.log("db connected.....");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(port,()=>{
    console.log(`api running on port ${port}`)
})