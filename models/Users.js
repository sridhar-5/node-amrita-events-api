const Joi = require("Joi");
const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  Name: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50,
  },
  username: {
    type: String,
    required: true,
    minlength: 16,
    maxlength: 16,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
    maxlength: 50,
  },
  email: {
    type: String,
    required: true,
    //can add a regex here to match
    unique: true,
  },
});

//creating a model for mongo Schema
const User = mongoose.model("User", UserSchema);

function validateUserLoginCredentials() {
  //defining joi schema to verify entered user login credentials
  const JoiUserCredentialsSchema = Joi.object({
    username: Joi.string().min(4).max(25).required(),
    password: Joi.string().min(8).max(50).required(),
  });

  return JoiUserCredentialsSchema;
}

module.exports = {
  User: User,
  validateUserLoginCredentials: validateUserLoginCredentials,
};
