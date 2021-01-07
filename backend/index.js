require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const apiRoutes = require('./src/routes/home')

const port = process.env.PORT || 5000;


app.use(cors())
app.use(express.json({limit: '1mb'}));
app.use(express.urlencoded({extended: true}))

//db connection
// const dbURI = process.env.DB_URI;
// mongoose
//   .connect(dbURI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useCreateIndex: true,
//   })
//   .then((connected) => {
//     console.log("db connected.....");
//   })
//   .catch((err) => {
//     console.log(err);
//   });


app.use('/api', apiRoutes)

//capture 404 Pages
app.use((req, res, next) => {
    const error = new Error("Page Not Found")
    error.status = 404;
    next(error)
})

//handle all errors
app.use((err, req, res, next) => {
    res.status(err.status || 500)
    res.json({
        error: {
            message: err.message
        }
    })
})


app.listen(port, () => console.log(`app running on port ${port}`))