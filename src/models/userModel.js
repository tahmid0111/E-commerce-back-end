// initial packages
const mongoose = require("mongoose");

const DataSchema = mongoose.Schema(
  {
    FirstName: {
      type: String,
      required: true,
      trim: true,
    },
    LastName: {
      type: String,
      required: true,
      trim: true,
    },
    Email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    Password: {
      type: String,
      required: true,
    },
    Phone: {
      type: String,
      required: true,
      unique: true,
    },
    Image: {
      type: String,
      required: true,
      trim: true,
    },
    Country: {
      type: String,
      required: true,
      trim: true,
    },
    City: {
      type: String,
      trim: true,
    },
    Address: {
      type: String,
      trim: true,
    },
    PostCode: {
      type: String,
      trim: true,
    },
    HouseNo: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const UserModel = mongoose.model("users", DataSchema);

module.exports = UserModel;
