const express = require("express");
const { User } = require("../models/Users");

module.exports = async function (request, response, next) {
  //querying the database to check if the user is admin
  const CheckUsersIsAdmin = await User.findOne({
    username: request.user.username,
  });

  //if user is not the admin respond with status - 403 -user restrictions
  if (!CheckUsersIsAdmin) {
    return response
      .status(403)
      .send("You are not allowed to do this operation..Contact Admins");
  }
  next();
};
