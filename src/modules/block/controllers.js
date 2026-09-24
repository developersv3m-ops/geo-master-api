const {createBlock, getBlocks, getBlockById, updateBlock, deleteBlock} = require("./service");

const createBlockController = async (req, res) => {
  try {
    const block = await createBlock(req.body);

    return res.status(201).json({
      success: true,
      message: "Block created successfully",
      data: block,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const getBlocksController = async (req, res) => {
  try {
    const blocks = await getBlocks();

    return res.status(200).json({
      success: true,
      count: blocks.length,
      data: blocks,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getBlockByIdController = async (
  req,
  res
) => {
  try {
    const block = await getBlockById(
      req.params.id
    );

    return res.status(200).json({
      success: true,
      data: block,
    });
  } catch (error) {
    return res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};

const updateBlockController = async (
  req,
  res
) => {
  try {
    const block = await updateBlock(
      req.params.id,
      req.body
    );

    return res.status(200).json({
      success: true,
      message: "Block updated successfully",
      data: block,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

/**
 * Delete Block
 */
const deleteBlockController = async (
  req,
  res
) => {
  try {
    await deleteBlock(req.params.id);

    return res.status(200).json({
      success: true,
      message: "Block deleted successfully",
    });
  } catch (error) {
    return res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createBlockController,
  getBlocksController,
  getBlockByIdController,
  updateBlockController,
  deleteBlockController,
};
