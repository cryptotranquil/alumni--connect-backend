const users = require("../data/users");

// GET all users
const getUsers = (req, res) => {
  res.status(200).json(users);
};

// GET user by ID
const getUserById = (req, res) => {
  const id = Number(req.params.id);

  const user = users.find(user => user.id === id);

  if (!user) {
    return res.status(404).json({
      message: "User not found"
    });
  }

  res.status(200).json(user);
};

// CREATE a new user
const createUser = (req, res) => {
  const { name, email, role } = req.body;

  if (!name || !email || !role) {
    return res.status(400).json({
      message: "Name, email and role are required"
    });
  }

  const newUser = {
    id: Date.now(),
    name,
    email,
    role
  };

  users.push(newUser);

  res.status(201).json({
    message: "User created successfully",
    user: newUser
  });
};

module.exports = {
  getUsers,
  getUserById,
  createUser
};
