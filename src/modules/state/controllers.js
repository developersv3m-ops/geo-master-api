const { create, findAll, findById, update, remove } = require("./service");

const createState = async (req, res) => {
  try {
    const state = await create(req.body);

    return res.status(201).json({
      success: true,
      message: "State created successfully",
      data: state,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const findAllStates = async (req, res) => {
  try {
    const states = await findAll();

    return res.status(200).json({
      success: true,
      count: states.length,
      data: states,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const findStateById = async (req, res) => {
  try {
    const { id } = req.params;

    const state = await findById(id);

    return res.status(200).json({
      success: true,
      data: state,
    });
  } catch (error) {
    return res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};

const updateState = async (req, res) => {
  try {
    const { id } = req.params;

    const state = await update(id, req.body);

    return res.status(200).json({
      success: true,
      message: "State updated successfully",
      data: state,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const removeState = async (req, res) => {
  try {
    const { id } = req.params;

    await remove(id);

    return res.status(200).json({
      success: true,
      message: "State deleted successfully",
    });
  } catch (error) {
    return res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {createState, findAllStates, findStateById, updateState, removeState};
