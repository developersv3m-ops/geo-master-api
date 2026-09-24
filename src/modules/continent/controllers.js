const continentService = require("./service");

// Create
const create = async (req, res) => {
  try {
    const result = await continentService.createContinent(req.body);
    return res.status(201).json({
      success: true,
      message: "Continent created successfully",
      // data: result,
    });
  }
  catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const getContinentById = async (req, res) => {
  try {
    const result = await continentService.getContinentById(req.params.id);
    return res.status(200).json({
      success: true,
      data: result,
    });
  }
  catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const getAllContinents = async (req, res) => {
  try {
    const result = await continentService.getAllContinent();
    return res.status(200).json({
      success: true,
      data: result,
    });
  }
  catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const updateContinent = async (req, res) => {
  try {
    const result = await continentService.updateContinent(req.params.id, req.body);
    return res.status(200).json({
      success: true,
      data: result,
    });
  }
  catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const deleteContinent = async (req, res) => {
  try {
    const result = await continentService.deleteContinent(req.params.id);
    return res.status(200).json({
      success: true,
      data: result,
    });
  }
  catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = { create, getContinentById, getAllContinents, updateContinent, deleteContinent };
