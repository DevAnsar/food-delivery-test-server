var express = require("express");
var cors = require("cors");
var bodyParser = require("body-parser");
// const mongoose = require("mongoose")
var dotenv = require("dotenv");
var axios = require("axios").default;

//Start App
let app = express();

//middlewares
dotenv.config();
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
axios.defaults.baseURL = process.env.DB_URL || 'http://localhost:8001';

//Import routes
// let indexRoutes = require("./src/routes/indexRoutes")
let loginRoutes = require("./src/routes/loginRoutes");
let userRoutes = require("./src/routes/userRoutes");
let deliveryRoutes = require("./src/routes/deliveryRoutes");

//Assign port
var port = process.env.PORT || 8000;

// Welcome message
// app.use('/api',indexRoutes);
app.use("/api/auth", loginRoutes);
app.use('/api/user',userRoutes);
app.use('/api/delivery',deliveryRoutes);

// Launch app to the specified port
app.listen(port, function () {
  console.log("Running server on port " + port);
  // mongoose
  // .connect("mongodb+srv://iot_user:oQCeuTRGJBL2BRR4@iotcontroller.dmtbo.mongodb.net/2021?retryWrites=true&w=majority", { useNewUrlParser: true })
  // .then(() => {
  //     console.log('db connect!')
  // }).catch(error=>{
  //     console.log('connecting has error',error)
  // })
});
