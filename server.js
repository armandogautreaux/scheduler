//IMPORT EXPRESS AND MONGOOSE
const express = require('express');
const mongoose = require('mongoose');

//INITIALIZE EXPRESS
const app = express();

//SET PORT
const PORT = process.env.PORT || 8080;

//MIDLEWARE
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('client/public'));

//IMPORT ROUTES AND PASS THEM THROUGHT EXPRESS
// const userRoutes = require('./routes/user.js');
// app.use(userRoutes);

//CONNECT MONGOOSE
// mongoose.connect(
//   process.env.MONGODB_URI || 'mongodb://localhost/scheduler'
// );

//START SERVER
app.listen(PORT, function() {
  console.log('Connected on PORT' + PORT);
});
