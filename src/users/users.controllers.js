const uuid = require("uuid");

const usersDB = [
  {
    id: "6ac53d0f-8861-4d1a-a5af-d1a140c92bd5",
    first_name: "Omar",
    last_name: "Sosa",
    email: "Omar@gmail.com",
    password: "password",
    birthday: "2001/05/08",
  },
  {
    id: "89da1f07-9118-4235-ac8d-b762ebfc95f8",
    first_name: "Aquino",
    last_name: "Ferreira",
    email: "Aquino@gmail.com",
    password: "password",
    birthday: "2002/06/09",
  },
  {
    id: "98e1594e-36b3-4353-bd43-bf40600e11dc",
    first_name: "Pepe",
    last_name: "Pepito",
    email: "Pepe@gmail.com",
    password: "password",
    birthday: "2000/02/21",
  },
];

const getAllUsers = () => {
  return usersDB;
};

const getOneUserByID = (id) => {
  const userID = usersDB.find((user) => user.id === id);
  return userID;
};

const createANewUser = (firstName, lastName, email, password, birthday) => {
  const repeatEmail = usersDB.find(user => user.email === email)
  if (!repeatEmail) {
    const newUserData = {
      id: uuid.v4(),
      first_name: firstName,
      last_name: lastName,
      email: email,
      password: password,
      birthday: birthday,
    };
    usersDB.push(newUserData);
    return newUserData;
  }else{
    return null
  }
};

module.exports = {
    getAllUsers,
    getOneUserByID,
    createANewUser
}