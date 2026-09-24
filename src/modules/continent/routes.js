const express = require("express");
const authenticate = require("../../middlewares/auth.middleware");
const { create, getContinentById, getAllContinents, updateContinent, deleteContinent } = require("./controllers");

const router = express.Router();

router.post("/", create);
router.get("/", authenticate, getAllContinents);
router.get("/:id", authenticate, getContinentById);
router.put("/:id",  updateContinent);
router.delete("/:id",  deleteContinent);

module.exports = router;
