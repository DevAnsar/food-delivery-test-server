//initialize express router
let router = require("express").Router();
const {
  getAuthUserAddresses,
  createNewAddress,
  getAllUser,
  getAuthUserData,
  updateAuthUserData,
} = require("./../controllers/UserController");
//Admin
//get all user api
router.get("/all", getAllUser);

//Client
//get authentication user Address  API
router.get("/address", getAuthUserAddresses);

//create new address for authenticated user
router.post("/address", createNewAddress);

//create auth user data
router.get("/me", getAuthUserData);

//update authenticated user personal data
router.patch("/me", updateAuthUserData);

//Export API routes
module.exports = router;
