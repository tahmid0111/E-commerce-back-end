const {
  RegisterUserService,
  LoginUserService,
  ReadUserService,
  UpdateUserService,
  UpdatePasswordService,
} = require("../services/userService");

exports.RegisterUser = async (req, res) => {
  let result = await RegisterUserService(req);

  if (result.status === "success") {
    res
      .status(200)
      .json({
        status: result.status,
        message: "User Successfully Registered",
        data: result.data,
      });
  }
  if (result.status === "invalidEmail") {
    res
      .status(404)
      .json({
        status: "Invalid Email",
        message: "Please provide a valid Email",
      });
  }
  if (result.status === "invalidPass") {
    res
      .status(404)
      .json({ status: "Weak Password", message: "Use a strong Password" });
  }
  if (result.status === "invalidNumber") {
    res
      .status(404)
      .json({
        status: "Wrong Phone Number",
        message: "Give a bangladeshi Phone Number",
      });
  }
  if (result.status === "oldUser") {
    res
      .status(404)
      .json({
        status: "Existing User",
        message: "An account is already registered with this email",
      });
  }
  if (result.status === "fail") {
    res.status(404).json({ status: "something went wrong" });
  }
};

exports.LoginUser = async (req, res) => {
  let result = await LoginUserService(req);
  if (result.status === "success") {
    res.json({ status: result.status, data: result.data });
  }
  if (result.status === "newUser") {
    res.json({
      status: "New User",
      data: "There is no account related to this Email",
    });
  }
  if (result.status === "wrongPassword") {
    res.json({ status: "Invalid", data: "Invalid Email or Password" });
  } else {
    res.status(404).json({ status: "fail", data: "something went wrong" });
  }
};

exports.ReadUser = async (req, res) => {
  let result = await ReadUserService(req);
  if (result.status === "success") {
    return res
      .status(200)
      .json({
        status: "success",
        message: "Here is your expected profile",
        data: result.data,
      });
  }
  if (result.status === "fail") {
    res.status(404).json({ status: "fail", message: "something went wrong" });
  }
};

exports.UpdateUser = async (req, res) => {
  let result = await UpdateUserService(req);
  if (result.status === "success") {
    res.status(200).json(result);
  }
  if (result.status === "email") {
    res
      .status(404)
      .json({ status: "not allowed", data: "you can not update the email" });
  }
  if (result.status === "password") {
    res.status(404).json({ status: "fail" });
  }
  if (result.status === "fail") {
    res.status(404).json({ status: "fail", data: "something went wrong" });
  }
};

exports.UpdatePassword = async (req, res) => {
  let result = await UpdatePasswordService(req);
  if (result.status === "success") {
    res.status(200).json(result);
  }
  if (result.status === "wrong") {
    res
      .status(404)
      .json({ status: "wrong password", data: "Incorrect Password" });
  }
  if (result.status === "samePassword") {
    res
      .status(404)
      .json({ status: "same password", data: "Please use a new Password" });
  }
  if (result.status === "invalidPassword") {
    res
      .status(404)
      .json({ status: "weak password", data: "Please insert a strong Password" });
  }
  if (result.status === "fail") {
    res.status(404).json({ status: "fail", data: "something went wrong" });
  }
};
