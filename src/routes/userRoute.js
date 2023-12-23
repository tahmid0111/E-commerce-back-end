// initial packages
const express=require('express');
const router=express.Router()

const { RegisterUser, LoginUser } = require('../controllers/userController');

router.post('/registeruser', RegisterUser)

router.post('/loginuser', LoginUser)

module.exports=router;