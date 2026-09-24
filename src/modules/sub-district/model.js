const mongoose = require("mongoose");

const subDistrictSchema = new mongoose.Schema(
  {
    districtId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "District",
      required: true,
    },

    subDistrictName: {
      type: String,
      required: true,
      trim: true,
    },

    subDistrictCode: {
      type: String,
      required: true,
      trim: true,
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

// Prevent duplicate names within same district
subDistrictSchema.index(
  {
    districtId: 1,
    subDistrictName: 1,
  },
  {
    unique: true,
  }
);

// Prevent duplicate codes within same district
subDistrictSchema.index(
  {
    districtId: 1,
    subDistrictCode: 1,
  },
  {
    unique: true,
  }
);

module.exports = mongoose.model("SubDistrict", subDistrictSchema);
