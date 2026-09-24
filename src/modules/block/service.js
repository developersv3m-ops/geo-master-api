const Block = require("./model");
const SubDistrict = require("./../sub-district/model");

/**
 * Create Block
 */
const createBlock = async (data) => {
  const {
    subDistrictId,
    blockName,
    blockCode,
    createdBy,
  } = data;

  // Check Sub District Exists
  const subDistrict =
    await SubDistrict.findById(subDistrictId);

  if (!subDistrict) {
    throw new Error("Sub District not found");
  }

  // Check Duplicate Block
  const existingBlock =
    await Block.findOne({
      $or: [
        { blockName },
        { blockCode },
      ],
    });

  if (existingBlock) {
    throw new Error("Block already exists");
  }

  const block = await Block.create({
    subDistrictId,
    blockName,
    blockCode,
    createdBy,
  });

  return block;
};

/**
 * Get All Blocks
 */
const getBlocks = async () => {
  return await Block.find()
    .populate(
      "subDistrictId",
      "subDistrictName subDistrictCode"
    )
    .sort({ blockName: 1 });
};

/**
 * Get Block By Id
 */
const getBlockById = async (id) => {
  const block = await Block.findById(id)
    .populate(
      "subDistrictId",
      "subDistrictName subDistrictCode"
    );

  if (!block) {
    throw new Error("Block not found");
  }

  return block;
};

/**
 * Update Block
 */
const updateBlock = async (id, data) => {
  const block = await Block.findById(id);

  if (!block) {
    throw new Error("Block not found");
  }

  return await Block.findByIdAndUpdate(
    id,
    data,
    {
      new: true,
      runValidators: true,
    }
  );
};

/**
 * Delete Block
 */
const deleteBlock = async (id) => {
  const block = await Block.findById(id);

  if (!block) {
    throw new Error("Block not found");
  }

  await Block.findByIdAndDelete(id);

  return {
    message: "Block deleted successfully",
  };
};

module.exports = {createBlock,getBlocks,getBlockById,updateBlock,deleteBlock};
