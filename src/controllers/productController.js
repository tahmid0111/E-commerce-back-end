const BrandModel=require('../models/brandModel')
const ProductModel = require('../models/productModel')

exports.AllProducts = async (req, res) => {
    try {
        const result = await ProductModel.find()
        res.status(200).json({status: 'success', data: result})
    } catch (error) {
        res.status(404).json({status: 'success', data: 'something went wrong'})
    }
}

exports.AllBrand = async (req, res) => {
    try {
        const result = await BrandModel.find()
        res.status(200).json({status: 'success', data: result})

    } catch (error) {
        res.status(404).json({status: 'success', data: 'something went wrong'})
    }
}

const mongoose = require('mongoose');
const sliderModel = require('../models/sliderModel')
const ObjectId = mongoose.Types.ObjectId;

exports.BrandById = async (req, res) => {
    let id= req.params.id;
    const Query = { $match: { brandID: new ObjectId(id) } };

    try {
      const result = await ProductModel.aggregate([Query]);
        res.status(200).json({status: 'success', data: result})

    } catch (error) {
        res.status(404).json({status: 'success', data: 'something went wrong'})
    }
}



exports.AllSliders = async(req, res) => {
    try {
        const result = await sliderModel.find()
        res.status(200).json({status: 'success', data: result})
    } catch (error) {
        res.status(404).json({status: 'success', data: 'something went wrong'})
    }
}

exports.AllCategory = async (req, res) => {
    try {
        const result = await sliderModel.find()
        res.status(200).json({status: 'success', data: result})
    } catch (error) {
        res.status(404).json({status: 'success', data: 'something went wrong'})

    }
}

exports.CategoryByID = async (req, res) => {
    try {
        const result = await sliderModel.find()
        res.status(200).json({status: 'success', data: result})
    } catch (error) {
        res.status(404).json({status: 'success', data: 'something went wrong'})

    }
}

exports.ProductByRemark = async (req, res) => {
    try {
        const result = await sliderModel.find()
        res.status(200).json({status: 'success', data: result})
    } catch (error) {
        res.status(404).json({status: 'success', data: 'something went wrong'})

    }
}

exports.CreateReview = async (req, res) => {
    try {
        const result = await sliderModel.find()
        res.status(200).json({status: 'success', data: result})
    } catch (error) {
        res.status(404).json({status: 'success', data: 'something went wrong'})

    }
}

exports.ReviewByProduct = async (req, res) => {
    try {
        const result = await sliderModel.find()
        res.status(200).json({status: 'success', data: result})
    } catch (error) {
        res.status(404).json({status: 'success', data: 'something went wrong'})

    }
}

exports.ProductByKeyword = async (req, res) => {
    try {
        const result = await sliderModel.find()
        res.status(200).json({status: 'success', data: result})
    } catch (error) {
        res.status(404).json({status: 'success', data: 'something went wrong'})

    }
}

exports.ProductBySimilar = async (req, res) => {
    try {
        const result = await sliderModel.find()
        res.status(200).json({status: 'success', data: result})
    } catch (error) {
        res.status(404).json({status: 'success', data: 'something went wrong'})

    }
}

exports.AllCategory = async (req, res) => {
    try {
        const result = await sliderModel.find()
        res.status(200).json({status: 'success', data: result})
    } catch (error) {
        res.status(404).json({status: 'success', data: 'something went wrong'})

    }
}

exports.AllCategory = async (req, res) => {
    try {
        const result = await sliderModel.find()
        res.status(200).json({status: 'success', data: result})
    } catch (error) {
        res.status(404).json({status: 'success', data: 'something went wrong'})

    }
}

exports.AllCategory = async (req, res) => {
    try {
        const result = await sliderModel.find()
        res.status(200).json({status: 'success', data: result})
    } catch (error) {
        res.status(404).json({status: 'success', data: 'something went wrong'})

    }
}


exports.AllCategory = async (req, res) => {
    try {
        const result = await sliderModel.find()
        res.status(200).json({status: 'success', data: result})
    } catch (error) {
        res.status(404).json({status: 'success', data: 'something went wrong'})

    }
}