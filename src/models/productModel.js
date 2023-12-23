const mongoose = require('mongoose')

const DataSchema = mongoose.Schema(
    {

    },
    {
        timestamps: true,
        versionkey: false
    }
)

const ProductModel = mongoose.model('products', DataSchema)

module.exports=ProductModel;