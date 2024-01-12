const mongoose = require('mongoose')

const DataSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            unique: true
        },
        subTitle: {
            type: String,
            required: true
        },
        des: {
            type: String,
            required: true,
        },
        image: {
            type: String,
            required: true,
        },
        categoryID: {
            type: mongoose.Schema.Types.ObjectId
        }
    },
    {
        timestamps: true,
        versionkey: false
    }
)

const sliderModel = mongoose.model('sliders', DataSchema)

module.exports=sliderModel;