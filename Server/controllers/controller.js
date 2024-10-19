import bcrypt from "bcryptjs";

import User from "../models/user.model.js";
import generateTokenAndSetCookie from "../utils/generateToken.js";

export const signup = async (req, res) => {
  try {
    const { fullName, username, password, confirmPassword, gender } = req.body;
    if (password != confirmPassword) {
      return res.status(400).json({ message: "Passwords do not match" });
    }
    const user = await User.findOne({ username });
    if (user) {
      return res.status(400).json({ error: "Username already exists" });
    }
    //HASH PASSWORD
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);
    //https://avatar-placeholder.iran.liara.run/
    const profilePic = `https://ui-avatars.com/api/?name=${encodeURIComponent(fullName)}&background=random`;
    const newUser = new User({
      fullName,
      username,
      password: hashPassword,
      gender,
      profilePic,
    });
    if (newUser) {
      //JWT token
      generateTokenAndSetCookie(newUser._id, res);

      await newUser.save();

      res.status(201).json({
        _id: newUser._id,
        fullName: newUser.fullName,
        username: newUser.username,
        profilePic: newUser.profilePic,
      });
    } else {
      res.status(400).json({ error: "invalid user data" });
    }
  } catch (error) {
    console.log("Error in sign up controller", error.message);

    res.status(500).json({ message: "Error signing up user" });
  }
  console.log("signup");
};

export const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    console.log("Login attempt for username:", username);
    const user = await User.findOne({ username });
    if (!user) {
      console.log("User not found:", username);
      return res.status(400).json({ error: "Invalid username or password" });
    }
    const passwordCorrect = await bcrypt.compare(password, user.password);
    console.log("Password correct:", passwordCorrect);
    if (!passwordCorrect) {
      return res.status(400).json({ error: "Invalid username or password" });
    }
    generateTokenAndSetCookie(user._id, res);
    console.log("Login successful for user:", username);

    res.status(200).json({
      _id: user._id,
      fullName: user.fullName,
      username: user.username,
      profilePic: user.profilePic,
    });
    console.log("user log in successfully");
    
  } catch (error) {
    console.error("Error in login controller:", error);
    res.status(500).json({ message: "Error logging in user" });
  }
};
export const logout = (req, res) => {
  try {
    res.cookie("jwt", "", { maxAge: 0 });
    res.status(200).json({ message: "Logged out successfully" });
  } catch (error) {
    console.log("Error in log in controller", error.message);

    res.status(500).json({ message: "Error signing up user" });
  }
};
