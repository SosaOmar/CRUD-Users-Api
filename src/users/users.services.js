const {
  getAllUsers,
  getOneUserByID,
  createANewUser,
} = require("./users.controllers");

const getAllUsersService = (req, res) => {
  const AllDataUsers = getAllUsers();
  res.status(200).json(AllDataUsers);
};

const getOneUserByIDService = (req, res) => {
  const id = req.params.id;

  const userData = getOneUserByID(id);
  if (userData) {
    res.status(200).json(userData);
  } else {
    res.status(404).json({ id: id, message: "Not found user id" });
  }
};

const createANewUserService = (req, res) => {
  const { first_name, last_name, email, password, birthday } = req.body;
  if (first_name && last_name && email && password && birthday) {
    const userData = createANewUser(
      first_name,
      last_name,
      email,
      password,
      birthday
    );
    if (userData) {
      res.status(201).json(userData);
    } else {
      res
        .status(400)
        .json({ message: "Can't create a new User, email already exist" });
    }
  } else {
    res.status(400).json({ message: "Cant create new User" });
  }
};

module.exports = {
  getAllUsersService,
  getOneUserByIDService,
  createANewUserService,
};
