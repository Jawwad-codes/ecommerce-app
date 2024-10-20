// register
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../../models/User");

const registerUser = async (req, res) => {
  const { userName, email, password } = req.body;

  try {
    const checkUser = await User.findOne({ email });

    if (checkUser) {
      return res.json({
        success: false,
        message: "User Already Exist With the same email please Try Again ",
      });
    }
    const hashPassword = await bcrypt.hash(password, 12);
    const newUser = new User({
      userName,
      email,
      password: hashPassword,
    });

    await newUser.save();

    res.status(200).json({
      success: true,
      message: "Registration Successful",
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "An error occurred during registration",
    });
  }
};

// Login
const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const checkUser = await User.findOne({ email });
    if (!checkUser) {
      return res.json({
        success: false,
        message: "User does't exist! please Register First",
      });
    }
    const checkpasswordmatch = await bcrypt.compare(
      password,
      checkUser.password
    );
    if (!checkpasswordmatch) {
      return res.json({
        success: false,
        message: "Invalid Password! please try again",
      });
    }
    const token = jwt.sign(
      {
        id: checkUser.id,
        email: checkUser.email,
        role: checkUser.role,
      },
      "CLIENT_SECRET_KEY",
      { expiresIn: "60m" }
    );
    res.cookie("token", token, { httponly: true, secure: false }).json({
      success: true,
      message: "Logged In Successfully",
      user: {
        email: checkUser.email,
        role: checkUser.role,
        id: checkUser.id,
      },
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
    });
  }
};
// auth

// auth-middlewhere
module.exports = { registerUser, loginUser };
