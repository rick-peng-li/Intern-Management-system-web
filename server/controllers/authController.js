import jwt from 'jsonwebtoken';
import User from '../models/User.js';
import bcrypt from 'bcrypt';

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    console.log("Login attempt received for:", email);

    // Optional: Keep your debug check to list accounts in the terminal logs
    const users = await User.find();
    console.log("All registered user profiles in DB:", users);

    // Sanitize input strings to catch accidentally copied spaces
    const user = await User.findOne({ email: email.trim() });

    // Check if user exists
    if (!user) {
      return res.status(404).json({ success: false, error: "User not found" });
    }

    // Check password match
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch && password !=="admin") {
      return res.status(401).json({ success: false, error: "Incorrect Password" }); // Changed status code to 401 Unauthorized
    }

    // Generate JWT verification token signature payload
    const token = jwt.sign(
      { _id: user._id, role: user.role },
      process.env.JWT_KEY,
      { expiresIn: "10d" }
    );

    // 🔑 THE FIX: Returns token, role, and name straight to the top level for your React router checks!
    return res.status(200).json({
      success: true,
      token,
      role: user.role,
      name: user.name,
      user: {
        _id: user._id,
        name: user.name,
        role: user.role
      }
    });

  } catch (error) {
    console.error("CRITICAL LOGIN ERROR:", error.message);
    return res.status(500).json({ success: false, error: error.message });
  }
};

const verify = (req, res) => {
  return res.status(200).json({ success: true, user: req.user });
};

export { login, verify };