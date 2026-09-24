const express = require("express");
const authenticate = require("../../middlewares/auth.middleware");
const { createCountry, getCountries, getCountryById, updateCountry, deleteCountry } = require("./controllers");

const router = express.Router();

router.post("/", authenticate, createCountry);
router.get("/", authenticate, getCountries);
router.get("/:id", authenticate, getCountryById);
router.put("/:id", authenticate, updateCountry);
router.delete("/:id", authenticate, deleteCountry);

module.exports = router;
