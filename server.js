const express = require('express');
const app = express();
const dotenv = require('dotenv'); // setuping the configaration
const morgan = require('morgan'); //get the log of url
const bodyparser = require('body-parser');
const path = require('path'); // geting the path

const connectDB = require('./server/database/connection')


// calling the configration file in the app
dotenv.config({path: 'config.env'})
const PORT = process.env.PORT||8080

//log request 
app.use(morgan('tiny'))

// mongodb connection  
connectDB();

// parse request to body-parser
app.use(bodyparser.urlencoded({extended: true}))

// set view engine
app.set('view engine', 'ejs');
// app.set('view',path.resolve(__dirname, 'view/ejs'))

//load asset
app.use('/css', express.static(path.resolve(__dirname, 'asset/css'))) //  we can use like this =  css/style.css
app.use('/img', express.static(path.resolve(__dirname, 'asset/img'))) //  we can use like this =  img/profile.jpg
app.use('/js', express.static(path.resolve(__dirname, 'asset/js'))) //  we can use like this =  js/custon.js

// load routers
app.use('/',require('./server/routes/router'))

// Start the server
app.listen(PORT, () => {
    console.log(`Server started on port http://localhost:${PORT}/`);
});