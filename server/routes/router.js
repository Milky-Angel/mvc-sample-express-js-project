const express = require('express');
const route = express.Router()

// renter the code in services file
const services = require('../services/render');
const controller = require('../controller/controller');

/* 
    * @ discreption Root Routs
    * @method GET/
*/
route.get('/',services.homeRoutes);

/* 
    * @ discreption add user Routs
    * @method GET /add
*/
route.get('/add',services.add_user);

/* 
    * @ discreption update user Routs
    * @method GET /update-user
*/
route.get('/update-user',services.update_user);


// API
route.post('/api/user',controller.create)
route.get('/api/user',controller.find)
route.put('/api/user/:id',controller.update)    
route.delete('/api/user/:id',controller.delete)
route.get('/api/user/:id',controller.reteive    )

module.exports = route