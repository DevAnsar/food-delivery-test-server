//initialize express router
let router = require('express').Router();
var {sendCode ,loginWithCode} = require('./../controllers/AuthController')

//set default API response
router.post('/phone', sendCode );

//set default API response
router.post('/code', loginWithCode);


//Export API routes
module.exports = router;