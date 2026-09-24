const Continent = require("./model")

// Create continent
const createContinent = async (data) => {
  const { continentName, continentCode, createdBy } = data;
  // Check if continent already exists
  const existingContinent = await Continent.findOne({
    $or: [{ continentName }, { continentCode }],
  });
  if (existingContinent) {
    throw new Error("Continent already exists");
  }
  const continent = await Continent.create({continentName, continentCode, createdBy});
  return continent;
};

// Get continent by id
const getContinentById = async (id) => {
  const continent = await Continent.findById(id);
  return continent;
};

// GetAllContinent by id
const getAllContinent = async () => {
  return await Continent.find().sort({ continentName: 1 });
};

// Update continent
const updateContinent = async (id, data) => {
  const { continentName, continentCode, updatedBy } = data;
  const continent = await Continent.findByIdAndUpdate(id, {continentName, continentCode, updatedBy}, {new: true});
  return continent;
};

// Delete continent
const deleteContinent = async (id) => {
  const continent = await Continent.findByIdAndDelete(id);
  return continent;
};



module.exports = {createContinent,getAllContinent, getContinentById,  updateContinent, deleteContinent};
