const mongoose = require('mongoose')

const DataSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            unique: true
        },
        shortDes: {
            type: String,
            required: true
        },
        price: {
            type: String,
            required: true,
        },
        image: {
            type: String,
            required: true,
        },
        brandID: {
            type: String
        }
    },
    {
        timestamps: true,
        versionkey: false
    }
)

const ProductModel = mongoose.model('products', DataSchema)

module.exports=ProductModel;