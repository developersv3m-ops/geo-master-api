const mongoose = require("mongoose");

const blockSchema = new mongoose.Schema(
  {
    subDistrictId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "SubDistrict",
      required: true,
    },

    blockName: {
      type: String,
      required: true,
      trim: true,
    },

    blockCode: {
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

/**
 * Prevent duplicate block names
 * within the same sub-district
 */
blockSchema.index(
  {
    subDistrictId: 1,
    blockName: 1,
  },
  {
    unique: true,
  }
);

/**
 * Prevent duplicate block codes
 * within the same sub-district
 */
blockSchema.index(
  {
    subDistrictId: 1,
    blockCode: 1,
  },
  {
    unique: true,
  }
);

module.exports = mongoose.model(
  "Block",
  blockSchema
);
