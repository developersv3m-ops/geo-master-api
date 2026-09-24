const User = require("./model");
const bcrypt = require("bcryptjs");
const {generateAccessToken,generateRefreshToken,verifyRefreshToken} = require("../../utils/jwt");

// REGISTER USER
const registerUser = async (data) => {
  const {
    username,
    email,
    password,
    firstName,
    lastName,
    gender,
    mobileNumber,
    profession,
    experienceInYears,
    address,
  } = data;

  // Check email already existsth
  const existingUser = await User.findOne({ email });

  if (existingUser) {
    throw new Error("Email already registered");
  }

  // Hash password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Create user
  const user = await User.create({
    username,
    email,
    password: hashedPassword,
    firstName,
    lastName,
    gender,
    mobileNumber,
    profession,
    experienceInYears,
    address,
  });

  return user;
};

// LOGIN USER
const loginUser = async (data) => {
  const { email, password } = data;

  // Find user by email
  const user = await User.findOne({ email });

  if (!user) {
    throw new Error("Invalid Email");
  }

  // Compare password
  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    throw new Error("Invalid Password");
  }

  // Generate Access Token
  const accessToken = generateAccessToken({
    userId: user._id,
    username: user.username,
    role: user.role,
  });

  // Generate Refresh Token
  const refreshToken = generateRefreshToken({
    userId: user._id,
  });

  // Save Refresh Token in DB
  user.refreshToken = refreshToken;
  await user.save();
  return {
    accessToken,
    refreshToken,
    user: {
      id: user._id,
      username: user.username,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      role: user.role,
    },
  };
};

// USER PROFILE
const getProfile = async (userId) => {
  const user = await User.findById(userId).select("-password -refreshToken");

  if (!user) {
    throw new Error("User not found");
  }

  return user;
};

// REFRESH ACCESS TOKEN
const refreshAccessToken = async (refreshToken) => {
  if (!refreshToken) {
    throw new Error("Refresh token is required");
  }

  // Verify refresh token
  const decoded = verifyRefreshToken(refreshToken);

  // Find user
  const user = await User.findById(decoded.userId);

  if (!user) {
    throw new Error("User not found");
  }

  // Match refresh token from DB
  if (user.refreshToken !== refreshToken) {
    throw new Error("Invalid refresh token");
  }

  // Generate new access token
  const accessToken = generateAccessToken({
    userId: user._id,
    username: user.username,
    role: user.role,
  });

  return {
    accessToken,
  };
};

module.exports = { registerUser, loginUser, getProfile, refreshAccessToken };
