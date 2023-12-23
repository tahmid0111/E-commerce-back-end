const express=require('express');
const router=express.Router()

const { AllBrand } = require('../controllers/productController');

router.get('/allbrand', AllBrand)

module.exports=router;