// initial packages
const mongoose=require('mongoose')

const DataSchema = mongoose.Schema({

    

})

const UserModel = mongoose.model('users', DataSchema)

module.exports=UserModel;