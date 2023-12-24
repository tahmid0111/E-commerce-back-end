// initial packages
const express=require('express');
const router=express.Router()

// user related routes are here
const { RegisterUser, LoginUser, ReadUser } = require('../controllers/userController');
// jsonwebtoken verify middleware
const { authVerify } = require('../middleware/TokenVerify');

router.post('/registeruser', RegisterUser)
router.post('/loginuser', LoginUser)
router.post('/readuser', authVerify, ReadUser)

module.exports=router;