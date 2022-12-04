const mongoose = require('mongoose');
//Importing mongoose to handle communicating model with database
const PortfolioSchema = new mongoose.Schema({});
//Declaring PortfolioSchema and setting it to equal all our data that is being saved for portfolio related things
module.exports = mongoose.model('Portfolio', PortfolioSchema);
//Exporting our model as Portfolio to pass on to the controllers