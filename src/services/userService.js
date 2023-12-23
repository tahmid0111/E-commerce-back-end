const userModel = require("../models/userModel");

exports.RegisterUserService = async (req) => {
  let reqBody = req.body;

  try {
    let result = await userModel.create(reqBody);

    return { status: "success", data: result };
  } catch (error) {
    return { status: "fail" };
  }
};
