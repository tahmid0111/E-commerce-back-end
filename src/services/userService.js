const UserModel = require("../models/userModel");

let bcrypt = require("bcrypt");
let jwt = require("jsonwebtoken");

exports.RegisterUserService = async (req) => {
  try {
    let reqBody = req.body;
    // regex for validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const bangladeshMobileRegex = /^(?:\+?880)?01[3-9]\d{8}$/;
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
    return result;
  } catch (error) {
    return { status: "fail" };
  }
};

exports.UpdateUserService = async (req) => {
  let reqBody = req.body;
  let email = req.headers.email;
  let Query = { Email: email };
  // Check if "Email" field is present in reqBody
  if (reqBody.Email) {
    return { status: "email", data: "Updating Email is not allowed" };
  }
  try {
    let result = await UserModel.updateOne(Query, reqBody);
    return { status: "success", data: result };
  } catch (error) {
    return { status: "fail" };
  }
};
