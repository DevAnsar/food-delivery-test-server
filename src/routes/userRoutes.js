//initialize express router
let router = require('express').Router();
const {getAuthUserAddresses ,createNewAddress,getAllUser}=require('./../controllers/UserController')
//Admin
//get all user api
router.get('/all', getAllUser);

//Client
//get authentication user Address  API
router.get('/address', getAuthUserAddresses);

//create new address for authenticated user
router.post('/address', createNewAddress);


//Export API routes
module.exports = router;