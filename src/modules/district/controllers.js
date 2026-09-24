const {
  createDistrict,
  getDistricts,
  getDistrictById,
  updateDistrict,
  deleteDistrict,
} = require("./service");

/**
 * Create District
 */
const createDistrictController = async (req, res) => {
  try {
    const district = await createDistrict(req.body);

    return res.status(201).json({
      success: true,
      message: "District created successfully",
      data: district,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

/**
 * Get All Districts
 */
const getDistrictsController = async (req, res) => {
  try {
    const districts = await getDistricts();

    return res.status(200).json({
      success: true,
      count: districts.length,
      data: districts,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

/**
 * Get District By Id
 */
const getDistrictByIdController = async (req, res) => {
  try {
    const district = await getDistrictById(
      req.params.id
    );

    return res.status(200).json({
      success: true,
      data: district,
    });
  } catch (error) {
    return res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};

/**
 * Update District
 */
const updateDistrictController = async (req, res) => {
  try {
    const district = await updateDistrict(
      req.params.id,
      req.body
    );

    return res.status(200).json({
      success: true,
      message: "District updated successfully",
      data: district,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

/**
 * Delete District
 */
const deleteDistrictController = async (req, res) => {
  try {
    await deleteDistrict(req.params.id);

    return res.status(200).json({
      success: true,
      message: "District deleted successfully",
    });
  } catch (error) {
    return res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {createDistrictController,getDistrictsController,getDistrictByIdController,updateDistrictController,deleteDistrictController};
