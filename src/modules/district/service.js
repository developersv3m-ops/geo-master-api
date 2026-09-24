// const District = require("./model");
// const createDistrict = async (data) => {
//   const district = new District(data);
//   await district.save();
//   return district;
// };
//
// const getDistricts = async () => {
//   const districts = await District.find();
//   return districts;
// };
//
// const getDistrictById = async (id) => {
//   const district = await District.findById(id);
//   return district;
// };
//
// const updateDistrict = async (id, data) => {
//   const district = await District.findByIdAndUpdate(id, data, { new: true });
//   return district;
// };
//
// const deleteDistrict = async (id) => {
//   await District.findByIdAndDelete(id);
// };
//
// module.exports = {createDistrict, getDistricts, getDistrictById, updateDistrict, deleteDistrict};

const District = require("./model");
const State = require("../state/model");

const createDistrict = async (data) => {
  const { stateId, districtName, districtCode, createdBy } = data;
  const state = await State.findById(stateId);
  if (!state) {
    throw new Error("State not found");
  }
  const existingDistrict = await District.findOne({
    $or: [{ districtName }, { districtCode }],
  });
  if (existingDistrict) {throw new Error("District already exists");}
  const district = await District.create({stateId, districtName, districtCode, createdBy});
  return district;
};

const getDistricts = async () => {
  return await District.find().populate("stateId", "stateName stateCode").sort({
    districtName: 1,
  });
};

const getDistrictById = async (id) => {
  const district = await District.findById(id).populate(
    "stateId",
    "stateName stateCode",
  );

  if (!district) {
    throw new Error("District not found");
  }
  return district;
};

const updateDistrict = async (id, data) => {
  const district = await District.findById(id);
  if (!district) {
    throw new Error("District not found");
  }

  const updatedDistrict = await District.findByIdAndUpdate(id, data, {
    new: true,
    runValidators: true,
  });
  return updatedDistrict;
};

const deleteDistrict = async (id) => {
  const district = await District.findById(id);

  if (!district) {
    throw new Error("District not found");
  }

  await District.findByIdAndDelete(id);
  return {
    message: "District deleted successfully",
  };
};

module.exports = {createDistrict, getDistricts, getDistrictById, updateDistrict, deleteDistrict};
