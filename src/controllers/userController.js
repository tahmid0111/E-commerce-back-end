const { RegisterUserService } = require("../services/userService")


exports.RegisterUser = async (req, res) => {

    let result = await RegisterUserService(req)

    if(result.status === 'success'){
        return res.status(200).json(result)
    }else{
        return res.status(404).json({status: 'fail', data: 'something went wrong'})
    }
}