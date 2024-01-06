const express=require('express');
const router=express.Router()

const { AllBrand, AllProducts } = require('../controllers/productController');

router.get('/allbrand', AllBrand)
router.get('/allproducts', AllProducts)

module.exports=router;