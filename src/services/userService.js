const UserModel = require("../models/userModel");

let bcrypt = require("bcrypt");
let jwt = require("jsonwebtoken");
// regex for validation
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
const bangladeshMobileRegex = /^(?:\+?880)?01[3-9]\d{8}$/;

exports.RegisterUserService = async (req) => {
  try {
    let reqBody = req.body;
    // Validating given info using regex
    if (!emailRegex.test(reqBody.Email)) {
      return { status: "invalidEmail" };
    }
    if (!passwordRegex.test(reqBody.Password)) {
      return { status: "invalidPass" };
    }
    if (!bangladeshMobileRegex.test(reqBody.Phone)) {
      return { status: "invalidNumber" };
    }
    // checking existing user's emails
    let Query = { Email: reqBody.Email };
    let user = await UserModel.findOne(Query);
    if (user) {
      return { status: "oldUser" };
    }
    // if all is okay then a new user will be registered with an encrypted password
    let hashedPass = await bcrypt.hash(reqBody.Password, 10);
    let myBody = {
      ...reqBody,
      Password: hashedPass, // Update the Password property
    };

    let result = await UserModel.create(myBody);
    return { status: "success", data: result };
  } catch (error) {
    return { status: "fail" };
  }
};

exports.LoginUserService = async (req) => {
  try {
    let reqBody = req.body;
    let Query = { Email: reqBody.Email };
    const user = await UserModel.findOne(Query);
    if (!user) {
      return { status: "newUser" };
    }
    let result = await bcrypt.compare(reqBody.Password, user.Password);
    if (!result) {
      return { status: "wrongPassword" };
    }
    let Payload = {
      exp: Math.floor(Date.now() / 1000) + 24 * 60 * 60,
      data: user,
    };
    let token = jwt.sign(Payload, "secretkey");

    return { status: "success", data: token };
  } catch (error) {
    return { status: "fail" };
  }
};

exports.ReadUserService = async (req) => {
  let email = req.headers.email;
  let Query = { Email: email };
  try {
    let result = await UserModel.findOne(Query);
    return { status: "success", data: result };
  } catch (error) {
    return { status: "fail" };
  }
};

exports.UpdateUserService = async (req) => {
  try {
    let reqBody = req.body;
    let email = req.headers.email;
    let Query = { Email: email };
    if (reqBody.Email) {
      return { status: "email" };
    }
    if (reqBody.Password) {
      return { status: "password" };
    }
    let result = await UserModel.updateOne(Query, reqBody);
    return { status: "success", data: result };
  } catch (error) {
    return { status: "fail" };
  }
};

exports.UpdatePasswordService = async (req) => {
  try {
    let reqBody = req.body;
    let email = req.headers.email;
    let Query = { Email: email };
    let data = await UserModel.findOne(Query);
    let user = await bcrypt.compare(reqBody.OldPassword, data.Password);
    if (!user) {
      return { status: "wrong" };
    }
    if (reqBody.OldPassword === reqBody.NewPassword) {
      return { status: "samePassword" };
    }
    if (!passwordRegex.test(reqBody.NewPassword)) {
      return { status: "invalidPassword" };
    }
    let hashedPass = await bcrypt.hash(reqBody.NewPassword, 10);
    let myBody = {
      Password: hashedPass,
    };
    let result = await UserModel.updateOne(Query, myBody);
    return { status: "success", data: result };
  } catch (error) {
    return { status: "fail" };
  }
};
