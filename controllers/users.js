const User = require('../models/user');

exports.test = async (req, res) => {
return res.send("Hello, World!");
};
exports.addUser = async (req, res) => {
  try {
    let {name,email,age} = req.body
    const user = new User({
      name: name,
      email: email,
      age: age
    });
    const savedUser = await user.save();

    res.status(201).json({ message: "User added", user: savedUser });
  } catch (err) {
    console.error(err);
    res.status(400).json({ message: err.message });
  }
};
exports.getUsers = async (req, res) => {
    try {
      const users = await User.find();
      res.status(200).json({ message: "Users retrieved successfully", users: users });
    } catch (err) {
      console.error(err);
      res.status(400).json({ message: err.message });
    }
};
exports.getUsersByEmail= async (req, res) => {
    const email = req.params.email.toLowerCase();
    try {
      const user = await User.findOne({ email });
      if (user) {
        res.json(user);
      } else {
        res.status(404).json({ error: 'User not found with the provided email' });
      }
    } catch (err) {
      res.status(500).json({ error: 'Server error' });
    }
  };
  

