const Joi = require("Joi");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
require("dotenv").config();

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
  isAdmin: {
    type: Boolean,
    default: false,
  },
});

//method to generating a jwt token
UserSchema.methods.GenerateJwtToken = function () {
  const token = jwt.sign(
    { _id: this._id, username: this.username },
    process.env.JWT_SECRET_KEY
  );
};
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

function validateUserRegisterDetails() {
  const JoiRegisterUserSchema = Joi.object({
    Name: Joi.string().min(5).max(50).required(),
    username: Joi.string().min(16).max(16).required(),
    password: Joi.string().min(8).max(50).required(),
    email: Joi.string().required(),
  });

  return JoiRegisterUserSchema;
}

module.exports = {
  User: User,
  validateUserLoginCredentials: validateUserLoginCredentials,
  validateUserRegisterDetails: validateUserRegisterDetails,
};
