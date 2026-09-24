const { create, getAll, getById, update, deleteById } = require("./service");

const createCountry = async (req, res) => {
  try {
    const country = await create(req.body);

    return res.status(201).json({
      success: true,
      message: "Country created successfully",
      data: country,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const getCountries = async (req, res) => {
  try {
    const countries = await getAll();

    return res.status(200).json({
      success: true,
      count: countries.length,
      data: countries,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getCountryById = async (req, res) => {
  try {
    const country = await getById(req.params.id);

    return res.status(200).json({
      success: true,
      data: country,
    });
  } catch (error) {
    return res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};

const updateCountry = async (req, res) => {
  try {
    const updatedCountry = await update(req.params.id, req.body);

    return res.status(200).json({
      success: true,
      message: "Country updated successfully",
      data: updatedCountry,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const deleteCountry = async (req, res) => {
  try {
    await deleteById(req.params.id);

    return res.status(200).json({
      success: true,
      message: "Country deleted successfully",
    });
  } catch (error) {
    return res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createCountry,
  getCountries,
  getCountryById,
  updateCountry,
  deleteCountry,
};
