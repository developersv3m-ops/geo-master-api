const mongoose = require("mongoose");

const countrySchema = new mongoose.Schema(
  {
    continentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Continent",
      required: true,
    },

    countryName: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },

    countryCode: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      uppercase: true,
    },

    createdBy: {
      type: String,
      required: true,
    },

    updatedBy: {
      type: String,
      default: null,
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
  }
);

module.exports = mongoose.model(
  "Country",
  countrySchema
);
