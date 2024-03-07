const express=require('express');
const router=express.Router()

const { AllProducts, AllBrand, BrandById, AllSliders, AllCategory, CategoryByID, ProductByRemark, CreateReview, ReviewByProduct, ProductBySimilar, ProductByKeyword, AllBrandSort } = require('../controllers/productController');

router.get('/allproducts', AllProducts)
router.get('/allbrands', AllBrand)
router.get('/allbrandssort', AllBrandSort)
router.get('/brandbyid/:id', BrandById)
router.get('/allsliders', AllSliders)
router.get('/allcategory', AllCategory)
router.get('/categorybyid/:id', CategoryByID)
router.get('/productbyremark/:remark', ProductByRemark)
router.get('/singleproduct/:productid', ProductByRemark)
router.post('/createreview', CreateReview)
router.get('/reviewbyproduct/:productid', ReviewByProduct)
router.get('/productbykeyword/:keyword', ProductByKeyword)
router.get('/productbysimilar/:categoryid', ProductBySimilar)

module.exports=router;