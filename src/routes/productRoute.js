const express=require('express');
const router=express.Router()

const { AllBrand, AllProducts, BrandById, AllSliders } = require('../controllers/productController');

router.get('/allbrand', AllBrand)
router.get('/brandbyid/:id', BrandById)
router.get('/allproducts', AllProducts)
router.get('/allsliders', AllSliders)

module.exports=router;