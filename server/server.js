PORT = 8000;
// -------------------------------
// require('dotenv').config(); :  This line will allow you to access your .env file through process.env
//--------------------------------
const express = require('express');
//This imports express which is a server-side application framework
//Express wraps HTTP requests and responses, then makes it easy to map said URL's to server-side functions
//----> Express is a layer built on top of the NodeJS, and helps manage servers and routes <-----
const cors = require('cors');
//This imports cors which stands for cross-origin-resource-sharing
//This allows us to tell the front end default localhost to pair up with the backend default localhost URL
//It is only used when the backend and frontend origin URL's are different
//--------------------------------
// const cookieParser = require('cookie-parser'); This line allows us to parse through cookies for AUTH 
//--------------------------------
const app = express();
//Here we are declaring a variable "app" and assigning it to our express() function
//<Middleware> -------------------------------------------------------------------------------------------------------------------
//APP.USE() is to configure any middleware we may have
//Everytime we use app.use() we are adding a new layer of middleware onto our express duties
app.use(express.json());
//We are adding a middleware layer that will handle translating to JSON
app.use(express.urlencoded({ extended: true }))
//By default set to false
//We are adding a middleware layer that will handle parsing incoming requests that have urlencoded payloads
app.use(cors({
    origin: 'http://localhost:3000',
    //Setting the origin URL to "Cross Polenate" with on the front end
//--------------------------------
    //credentials: true : Is used when doing AUTH for User Validation
//--------------------------------
}))
//This will allow us to connect our front end 3000 to our back end 8000
//Taking cors away will result in cors errors while attempting your axios calls
//This security feature is built into the browser
//--------------------------------
// app.use(cookieParser()) : This is adding a middleware to handle parsing cookies for User Auth
//--------------------------------
//<Files>---------------------------------------------------------------------------------------------------------------------
require('./config/mongoose.config');
//Pulling in and connecting to our mongoose configuration
require('./routes/portfolio.route')(app);
//The (<routeInfo>) will import the function that was created in a separate file.
//The (<app>) will call that function with app as the argument
//<Listen>---------------------------------------------------------------------------------------------------------------------
app.listen(`${PORT}`, () => {
    console.log(`You are connected to Port ${PORT}`)
})
//Defines the port number to run on