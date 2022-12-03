const mongoose = require('mongoose');
// importing mongoose to act as the front-end for our mongoDB. 
// handles managing data in the db using mongoDB api's.
const portfolioDB = 'PortfolioDB';
//declaring a variable for string interpolation when we connect our localhost port
mongoose.connect(`mongodb://127.0.0.1/${portfolioDB}`, {
    useNewUrlParser: true,
    //false by default
    //this means that a mongoDB driver depracated the current connection "string/url parser". 
    //so we are using the new connection "string/url parser" instead.
    //----> the new url parser does not support connection strings that do not have a port <----
    useUnifiedTopology: true
    //false by default
    //will provide your db a stable connection
    //uses the mongoDB driver's new connection management engine
})
    .then(() => {
        console.log(`Welcome, you are connected to the ${portfolioDB}`)
    })
    .catch((err) => {
        console.log(`Sorry, you ran into a problem connecting to the ${portfolioDB}`, err)
    })
//these promises allow us to tell the user on the console if we are connected or not

