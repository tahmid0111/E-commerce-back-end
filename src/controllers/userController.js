const { RegisterUserService, LoginUserService } = require("../services/userService")


exports.RegisterUser = async (req, res) => {

    let result = await RegisterUserService(req)

    if(result.status === 'success'){
        return res.status(200).json(result)
    }else{
        return res.status(404).json({status: 'fail', data: 'something went wrong'})
    }
}

exports.LoginUser = async (req, res) => {
    let result = await LoginUserService(req);

    if (result.status === 'success') {

        res.json({status: 'success', data: result.data})

    } else if(result.status === 'wrong') {

        res.json({status: 'wrong', data: 'invalid username or password'})

    }
     else {
        res.status(404).json({status: 'fail', data: 'something went wrong'})
    }
}