//initialize express router
let searchRouter= require('express').Router();
const {getSearch}=require('../controllers/UserController')


searchRouter.get('/',getSearch)

//Export API routes
module.exports = searchRouter;