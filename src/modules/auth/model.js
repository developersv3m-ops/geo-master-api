const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },

    password: {
      type: String,
      required: true,
    },

    firstName: {
      type: String,
      required: true,
    },

    lastName: {
      type: String,
    },

    gender: {
      type: String,
      enum: ["MALE", "FEMALE", "OTHER"],
    },

    mobileNumber: {
      type: String,
      required: true,
      unique: true,
    },

    profession: String,

    experienceInYears: {
      type: Number,
      default: 0,
    },

    address: String,

    role: {
      type: String,
      enum: ["SUPER_ADMIN", "ADMIN", "DATA_ENTRY", "VIEWER"],
      default: "VIEWER",
    },

    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: {
      createdAt: "createdDate",
      updatedAt: "updatedDate",
    },
  },
);

module.exports = mongoose.model("User", userSchema);
