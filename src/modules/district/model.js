const mongoose = require("mongoose");

const districtSchema = new mongoose.Schema(
  {
    stateId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "State",
      required: true,
    },

    districtName: {
      type: String,
      required: true,
      trim: true,
    },

    districtCode: {
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

/**
 * Prevent duplicate district names
 * within the same state
 */
districtSchema.index(
  {
    stateId: 1,
    districtName: 1,
  },
  {
    unique: true,
  }
);

/**
 * Prevent duplicate district codes
 * within the same state
 */
districtSchema.index(
  {
    stateId: 1,
    districtCode: 1,
  },
  {
    unique: true,
  }
);

module.exports = mongoose.model(
  "District",
  districtSchema
);
