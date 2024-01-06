const BrandModel=require('../models/brandModel')
const ProductModel = require('../models/productModel')

exports.AllBrand = async (req, res) => {
    try {
        const result = await BrandModel.find()
        res.status(200).json({status: 'success', data: result})

    } catch (error) {
        res.status(404).json({status: 'success', data: 'something went wrong'})
    }
}

exports.AllProducts = async (req, res) => {
    try {
        const result = await ProductModel.find()
        res.status(200).json({status: 'success', data: result})
    } catch (error) {
        res.status(404).json({status: 'success', data: 'something went wrong'})
    }
}