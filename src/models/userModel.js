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
      trim: true,
    },

    Password: {
      type: String,
      required: true,
    },

    Phone: {
      Phone1: { type: String, required: true },
      Phone2: { type: String },
    },

    Country: {
      type: String,
      required: true,
      trim: true,
    },

    City: {
      type: String,
      required: true,
      trim: true,
    },

    Address: {
      type: String,
      required: true,
      trim: true,
    },

    PostCode: {
      type: String,
      required: true,
      trim: true,
    },

    HouseNo: {
      type: String,
      required: true,
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
