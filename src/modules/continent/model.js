const Mongoose = require("mongoose");

const continentSchema = new Mongoose.Schema(
  {
    continentName: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },

    continentCode: {
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

module.exports = Mongoose.model("Continent", continentSchema);
