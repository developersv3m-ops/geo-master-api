const express = require("express");
const authRoutes = require("./modules/auth/routes");
const continentRoutes = require("./modules/continent/routes");
const countryRoutes = require("./modules/country/routes");
const stateRoutes = require("./modules/state/routes");
const districtRoutes = require("./modules/district/routes");
const subDistrictRoutes = require("./modules/sub-district/routes");
const blockRoutes = require("./modules/block/routes");

const app = express();

// Read JSON body
app.use(express.json());

// Register auth routes
app.use("/api/auth", authRoutes);

// Register continent routes
app.use("/api/continents", continentRoutes);

// Register country routes
app.use("/api/countries", countryRoutes);

// Register state routes
app.use("/api/states", stateRoutes);

// Register district routes
app.use("/api/districts", districtRoutes);

// Register sub-district routes
app.use("/api/sub-districts", subDistrictRoutes);

// Register block routes
app.use("/api/blocks", blockRoutes);

module.exports = app;
