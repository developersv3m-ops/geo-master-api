const express = require("express");
const router = express.Router();
const authenticate = require("../../middlewares/auth.middleware");
const { register, login, profile } = require("./controllers");

router.post("/register", register);

router.post("/login", login);

router.get("/profile", authenticate, profile);

module.exports = router;
