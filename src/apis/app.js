import dotenv from "dotenv";
import mongoose from "mongoose";
import express from "express";
import home from './routes/home/index.js'

const app=express()
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api/users',home)

dotenv.config();
const dbURI = process.env.DB_URI;



//db connection
mongoose
  .connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then((connected) => {
    console.log("db connected.....");
  })
  .catch((err) => {
    console.log(err);
  });

const port = 5050 || process.env.PORT;
app.listen(port, () => {
  console.log(`app running on port ${port}`);
});
