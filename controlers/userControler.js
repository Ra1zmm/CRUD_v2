import User from "../models/userModels.js";

export const create = async (req, res) => {
  try {
    const userData = new User(req.body);
    const userEmail = userData.email;
    console.log("User email", userEmail);
    const userExist = await User.findOne({ email: userEmail });
    console.log("user exist", userExist);
    if (userExist) {
      return res.status(400).json({ message: "The user is already existing" });
    } else {
      const savededUser = await userData.save();
      res.status(200).json(savededUser);
    }
  } catch (error) {
    res.status(500).json({ error: "internal server error" });
  }
};

export const fetch = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: "internal server error" });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const userExist = await User.findOne({ _id: userId });
    if (!userExist) {
      res.status(404).json({ message: "The user is Not found" });
    } else {
      await User.findByIdAndDelete(userId);
      res.status(200).json({ message: "The user deleted successfully" });
    }
  } catch (error) {
    res.status(500).json({ error: "internal server error" });
  }
};

export const update = async (req, res) => {
  try {
    const userId = req.params.id;
    const userExist = await User.findOne({ _id: userId });
    if (!userExist) {
      res.status(404).json({ message: "The user is Not found" });
    } else {
      const updetedUser = await User.findByIdAndUpdate(userId, req.body, {
        new: true,
      });
      res.status(200).json(updetedUser);
    }
  } catch (error) {
    res.status(500).json({ error: "internal server error" });
  }
};
