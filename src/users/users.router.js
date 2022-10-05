const router = require("express").Router();

const usersServises = require("./users.services");

router.get("/users", usersServises.getAllUsersService);
router.post("/users", usersServises.createANewUserService);
router.get("/users/:id", usersServises.getOneUserByIDService);

module.exports = router