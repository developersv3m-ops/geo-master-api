const mongoose = require("mongoose");

const stateSchema = new mongoose.Schema(
  {
    countryId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Country",
      required: true,
    },

    stateName: {
      type: String,
      required: true,
      trim: true,
    },

    stateCode: {
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

// Prevent duplicate states within the same country
stateSchema.index(
  {
    countryId: 1,
    stateName: 1,
  },
  {
    unique: true,
  }
);

// Prevent duplicate state codes within the same country
stateSchema.index(
  {
    countryId: 1,
    stateCode: 1,
  },
  {
    unique: true,
  }
);

module.exports = mongoose.model("State",stateSchema);
