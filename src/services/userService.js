const UserModel = require("../models/userModel");

let bcrypt = require('bcrypt')
let jwt = require('jsonwebtoken')

exports.RegisterUserService = async (req) => {
    let reqBody = req.body;
    let hashedPass = await bcrypt.hash(reqBody.Password, 10)
    // ES6 Spread Operator
    let myBody = {
        ...reqBody, // Spread the properties of reqBody
        Password: hashedPass, // Update the Password property
      };

  try {
    let result = await UserModel.create(myBody);

    return { status: "success", data: result };
  } catch (error) {
    return { status: "fail" };
  }
};

exports.LoginUserService = async (req) => {
    let reqBody = req.body;
    let Query = {Email: reqBody.Email}

    try {

        let user = await UserModel.findOne(Query)
        if(user) {

            let result = await bcrypt.compare(reqBody.Password, user.Password)

            if(result) {
                let Payload = {
                    exp: Math.floor(Date.now() / 1000) + (24 * 60 * 60),
                    data: user
                }
                let token = jwt.sign(Payload, 'secretkey')

                return {status: 'success', data: token}

                // res.json({status: 'login successful', data: token})

            }else{
                return {status: 'wrong'}
            }

        }
        
    } catch (error) {
        return {status: 'fail'}
    }
}
