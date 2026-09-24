const Country = require("./model");
const Continent = require("../continent/model");

const create = async (data) => {
  const { continentId, countryName, countryCode, createdBy } = data;
  const continent = await Continent.findById(continentId);
  if (!continent) {
    throw new Error("Continent not found");
  }

  const existingCountry = await Country.findOne({
    $or: [{ countryName }, { countryCode }],
  });

  if (existingCountry) {
    throw new Error("Country already exists");
  }

  const country = await Country.create({continentId,countryName,countryCode,createdBy});

  return country;
};

const getAll = async () => {
  return await Country.find()
    .populate("continentId", "continentName continentCode")
    .sort({
      countryName: 1,
    });
};

const getById = async (id) => {
  const country = await Country.findById(id).populate(
    "continentId",
    "continentName continentCode",
  );

  if (!country) {
    throw new Error("Country not found");
  }

  return country;
};

const update = async (id, data) => {
  const country = await Country.findById(id);

  if (!country) {
    throw new Error("Country not found");
  }

  const updatedCountry = await Country.findByIdAndUpdate(id, data, {
    new: true,
    runValidators: true,
  });

  return updatedCountry;
};

const deleteById = async (id) => {
  const country = await Country.findById(id);

  if (!country) {
    throw new Error("Country not found");
  }

  await Country.findByIdAndDelete(id);

  return {
    message: "Country deleted successfully",
  };
};

module.exports = {create,getAll,getById,update,deleteById};
