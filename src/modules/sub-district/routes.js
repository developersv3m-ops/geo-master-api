const { Router } = require("express");
const { createSubDistrictController, getSubDistrictsController, getSubDistrictByIdController, updateSubDistrictController, deleteSubDistrictController } = require("./controllers");

const router = Router();

router.post("/", createSubDistrictController);
router.get("/", getSubDistrictsController);
router.get("/:id", getSubDistrictByIdController);
router.put("/:id", updateSubDistrictController);
router.delete("/:id", deleteSubDistrictController);

module.exports = router;
