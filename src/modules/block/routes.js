const express = require("express");

const router = express.Router();

const {createBlockController,getBlocksController,getBlockByIdController,updateBlockController,deleteBlockController} = require("./controllers");

const authenticate = require("../../middlewares/auth.middleware");

router.post(
  "/",
  authenticate,
  createBlockController
);

router.get(
  "/",
  authenticate,
  getBlocksController
);

router.get(
  "/:id",
  authenticate,
  getBlockByIdController
);

router.put(
  "/:id",
  authenticate,
  updateBlockController
);

router.delete(
  "/:id",
  authenticate,
  deleteBlockController
);

module.exports = router;
