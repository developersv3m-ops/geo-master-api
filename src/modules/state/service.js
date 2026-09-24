// const State = require("./model");
//
// const create = async (data) => {
//   const state = new State(data);
//   await state.save();
//   return state;
// };
//
// const findAll = async () => {
//   return State.find();
// };
//
// const findById = async (id) => {
//   return State.findById(id);
// };
//
// const update = async (id, data) => {
//   return State.findByIdAndUpdate(id, data, { new: true });
// };
//
// const remove = async (id) => {
//   return State.findByIdAndDelete(id);
// };
//
// module.exports = { create, findAll, findById, update, remove };

const State = require("./model");
const Country = require("../country/model");

const create = async (data) => {
  const { countryId, stateName, stateCode, createdBy } = data;

  const country = await Country.findById(countryId);

  if (!country) {
    throw new Error("Country not found");
  }

  const existingState = await State.findOne({
    $or: [{ stateName }, { stateCode }],
  });

  if (existingState) {
    throw new Error("State already exists");
  }

  const state = await State.create({
    countryId,
    stateName,
    stateCode,
    createdBy,
  });

  return state;
};

const findAll = async () => {
  return await State.find()
    .populate("countryId", "countryName countryCode")
    .sort({
      stateName: 1,
    });
};

const findById = async (id) => {
  const state = await State.findById(id).populate(
    "countryId",
    "countryName countryCode",
  );

  if (!state) {
    throw new Error("State not found");
  }

  return state;
};

const update = async (id, data) => {
  const state = await State.findById(id);

  if (!state) {
    throw new Error("State not found");
  }

  const updatedState = await State.findByIdAndUpdate(id, data, {
    new: true,
    runValidators: true,
  });

  return updatedState;
};

const remove = async (id) => {
  const state = await State.findById(id);

  if (!state) {
    throw new Error("State not found");
  }

  await State.findByIdAndDelete(id);

  return {
    message: "State deleted successfully",
  };
};

module.exports = { create, findAll, findById, update, remove };
