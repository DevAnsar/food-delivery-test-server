//initialize express router
let router = require('express').Router();
const {getDelivers , getCategories}=require('./../controllers/DeliverController')

//get all delivery api
router.get('/categories', getCategories);

//get all delivery api
router.get('/', getDelivers);




//Export API routes
module.exports = router;