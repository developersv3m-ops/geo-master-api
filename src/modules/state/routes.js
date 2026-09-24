const express = require("express");
const { createState, findAllStates, findStateById, updateState, removeState } = require("./controllers");

const router = express.Router();

router.post("/", createState);
router.get("/", findAllStates);
router.get("/:id", findStateById);
router.put("/:id", updateState);
router.delete("/:id", removeState);

module.exports = router;
