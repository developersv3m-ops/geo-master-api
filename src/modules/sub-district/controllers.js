const { createSubDistrict, getSubDistricts, getSubDistrictById, updateSubDistrict, deleteSubDistrict } = require("./service");

const createSubDistrictController = async (req, res) => {
  try {
    const subDistrict = await createSubDistrict(req.body);
    res.status(201).json(subDistrict);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getSubDistrictsController = async (req, res) => {
  try {
    const subDistricts = await getSubDistricts();
    res.status(200).json(subDistricts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getSubDistrictByIdController = async (req, res) => {
  try {
    const subDistrict = await getSubDistrictById(req.params.id);
    res.status(200).json(subDistrict);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateSubDistrictController = async (req, res) => {
  try {
    const subDistrict = await updateSubDistrict(req.params.id, req.body);
    res.status(200).json(subDistrict);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteSubDistrictController = async (req, res) => {
  try {
    await deleteSubDistrict(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createSubDistrictController, getSubDistrictsController, getSubDistrictByIdController, updateSubDistrictController, deleteSubDistrictController };
