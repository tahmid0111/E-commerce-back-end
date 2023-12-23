// initial packages
const express=require('express');
const router=express.Router()

const { RegisterUser } = require('../controllers/userController');

router.post('/registeruser', RegisterUser)

module.exports=router;