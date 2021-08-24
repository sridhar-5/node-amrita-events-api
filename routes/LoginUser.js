const Express = require("express");
const bcrypt = require("bcrypt");
const router = Express.Router();

const { User, validateUserLoginCredentials } = require("../models/Users");

router.post("/", async (request, response) => {
  const JoiSchema = validateUserLoginCredentials();
  //evaluating the user entered credentials to avoid attacks
  const { error } = JoiSchema.validate(request.body);

  //returning the failed constraint message when email or password constraints fail.
  if (error) return response.status(400).send(error.details[0].message);

  //checking the database for the user.
  const CheckUser = await User.findOne({ username: request.body.username });

  //if user record is not available then responds as a bad request
  if (!CheckUser)
    return response.status(400).send("Invalid Username or Password");

  //check if entered password and user password is same
  const PasswordCheck = await bcrypt.compare(
    request.body.password,
    CheckUser.password
  );
  //wrong password case
  if (!PasswordCheck)
    return response.status(400).send("Invalid Username or Password");

  //if both entered username and password are correct then generating a jwt token

  const token = CheckUser.GenerateJwtToken();
  response.header("user-auth-token", token).status(200).send(token);
});

module.exports = router;
