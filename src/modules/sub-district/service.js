// const SubDistrict = require("./model");
//
// const createSubDistrict = async (data) => {
//   const subDistrict = new SubDistrict(data);
//   await subDistrict.save();
//   return subDistrict;
// };
//
// const getSubDistricts = async () => {
//   return SubDistrict.find();
// };
//
// const getSubDistrictById = async (id) => {
//   return SubDistrict.findById(id);
// };
//
// const updateSubDistrict = async (id, data) => {
//   return SubDistrict.findByIdAndUpdate(id, data, { new: true });
// };
//
// const deleteSubDistrict = async (id) => {
//   return SubDistrict.findByIdAndDelete(id);
// };
//
// module.exports = {createSubDistrict, getSubDistricts, getSubDistrictById, updateSubDistrict, deleteSubDistrict};

const SubDistrict = require("./model");
const District = require("../district/model");

const createSubDistrict = async (data) => {
  const { districtId, subDistrictName, subDistrictCode, createdBy } = data;

  const district = await District.findById(districtId);

  if (!district) {
    throw new Error("District not found");
  }

  const existingSubDistrict = await SubDistrict.findOne({
    $or: [{ subDistrictName }, { subDistrictCode }],
  });

  if (existingSubDistrict) {
    throw new Error("Sub District already exists");
  }

  const subDistrict = await SubDistrict.create({districtId,subDistrictName,subDistrictCode,createdBy});

  return subDistrict;
};

const getSubDistricts = async () => {
  return await SubDistrict.find()
    .populate("districtId", "districtName districtCode")
    .sort({
      subDistrictName: 1,
    });
};

const getSubDistrictById = async (id) => {
  const subDistrict = await SubDistrict.findById(id).populate(
    "districtId",
    "districtName districtCode",
  );

  if (!subDistrict) {
    throw new Error("Sub District not found");
  }

  return subDistrict;
};

const updateSubDistrict = async (id, data) => {
  const subDistrict = await SubDistrict.findById(id);

  if (!subDistrict) {
    throw new Error("Sub District not found");
  }

  const updatedSubDistrict = await SubDistrict.findByIdAndUpdate(id, data, {
    new: true,
    runValidators: true,
  });

  return updatedSubDistrict;
};

const deleteSubDistrict = async (id) => {
  const subDistrict = await SubDistrict.findById(id);

  if (!subDistrict) {
    throw new Error("Sub District not found");
  }

  await SubDistrict.findByIdAndDelete(id);

  return {
    message: "Sub District deleted successfully",
  };
};

module.exports = {createSubDistrict,getSubDistricts,getSubDistrictById,updateSubDistrict,deleteSubDistrict};
