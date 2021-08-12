const Express = require("express");
const router = Express.Router();
const { User, validateUserRegisterDetails } = require("../models/Users");
const bcrypt = require("bcrypt");

router.post("/", async (request, response) => {
  // validating the user's request body
  const JoiRegisterSchema = validateUserRegisterDetails();

  const { error } = JoiRegisterSchema.validate(request.body);
  if (error) return response.status(400).send(`<h1>400: Bad Request</h1>`);

  // check if the user is already there in the data base
  const CheckIfUserIsAlreadyRegistered = await User.findOne({
    username: request.body.username,
  });

  if (CheckIfUserIsAlreadyRegistered)
    return response
      .status(400)
      .send("User Already Exists. Please Try to Login..!");

  const CreateUserInstance = new User({
    Name: request.body.Name,
    username: request.bosy.username,
    password: request.body.password,
    email: request.body.email,
  });

  //encrypting the user password before saving to the database
  const salt = "hghj";
});

module.exports = router;
