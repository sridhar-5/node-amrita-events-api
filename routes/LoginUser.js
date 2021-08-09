const Express = require("express");
const router = Express.Router();

const { User, validateUserLoginCredentials } = require("../models/Users");

router.post("/", (request, response) => {
  const JoiSchema = validateUserLoginCredentials();
  //evaluating the user entered credentials to avoid attacks
  const { error } = JoiSchema.validate(request.body);

  //returning the failed constraint message when email or password constraints fail.
  if (error) return response.status(400).send(error.details[0].message);

  //checking the database for the user.
});

module.exports = router;
