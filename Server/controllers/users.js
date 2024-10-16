import User from "../models/user.model.js";

export const getUsers = async (req, res) => {
  try {
    const loggedInUser = req.user._id;
    const allUsers = await User.find({ _id: { $ne: loggedInUser } }).select("-password");
    res.status(200).json(allUsers);
  } catch (error) {
    console.log("error in get users", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
