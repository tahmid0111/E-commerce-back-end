const {
  RegisterUserService,
  LoginUserService,
  ReadUserService,
  UpdateUserService,
} = require("../services/userService");

exports.RegisterUser = async (req, res) => {
  let result = await RegisterUserService(req);

  if (result.status === "success") {
    res.status(200).json(result);
  }
  if (result.status === "wrongEmail") {
    res.status(404).json({ status: "fail email" });
  }
  if (result.status === "wrongPass") {
    res.status(404).json({ status: "fail pass" });
  }
  if (result.status === "oldUser") {
    res.status(404).json({ status: "fail user" });
  }
  else{
    res.status(404).json({ status: "something went wrong bby" });
  }
};

exports.LoginUser = async (req, res) => {
  let result = await LoginUserService(req);
  if (result.status === "success") {
    res.json({ status: "success", data: result.data });
  } else if (result.status === "wrong") {
    res.json({ status: "wrong", data: "invalid username or password" });
  } else {
    res.status(404).json({ status: "fail", data: "something went wrong" });
  }
};

exports.ReadUser = async (req, res) => {
  let result = await ReadUserService(req);
  if (result.status === "success") {
    return res
      .status(200)
      .json({ status: "success", message: "msg", data: result });
  } else {
    res
      .status(404)
      .json({ status: "fail", message: "something went wrong", data: error });
  }
};

exports.UpdateUser = async (req, res) => {
  let result = await UpdateUserService(req);
  if (result.status === "success") {
    res.status(200).json(result);
  } else if (result.status === "email") {
    res
      .status(404)
      .json({ status: "not allowed", data: "you can not update the email" });
  } else {
    res
      .status(404)
      .json({ status: "fail", data: "something went wrong" });
  }
};
