//initialize express router
let router = require('express').Router();
const {getDelivers , getCategories,getDelivery}=require('./../controllers/DeliverController')

//get all delivery api
router.get('/categories', getCategories);

//get all delivery api
router.get('/', getDelivers);

//get delivery api
router.get('/dtl/:deliveryId', getDelivery);


//Export API routes
module.exports = router;