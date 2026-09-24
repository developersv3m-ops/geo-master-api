const authService = require("./service");

// REGISTER
const register = async (req, res) => {
  try {
    const result = await authService.registerUser(req.body);

    res.status(201).json({
      success: true,

      message: "User Registered Successfully",

      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// LOGIN
const login = async (req, res) => {
  try {
    const result = await authService.loginUser(req.body);

    res.status(200).json({
      success: true,
      message: "Login Successful",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// USER PROFILE
const profile = async (req, res) => {
  try {
    const result = await authService.getProfile(req.user.userId);

    return res.status(200).json({
      success: true,

      data: result,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,

      message: error.message,
    });
  }
};

module.exports = { register, login, profile };
