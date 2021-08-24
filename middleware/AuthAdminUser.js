const express = require("express");
const { User } = require("../models/Users");

module.exports = async function (request, response, next) {
  //querying the database to check if the user is admin
  const CheckUsersIsAdmin = await User.findOne({
    username: request.user.username,
  });

  console.log(CheckUsersIsAdmin);
  //if user is not the admin respond with status - 403 -user restrictions
  if (!CheckUsersIsAdmin.isAdmin) {
    //if the user is not an admin then rendering back the client side views
    return response
      .status(400)
      .send("You are not permitted to make this request...! Contact Admins.");
  }
  //debugging purposes
  //console.log("Admin");
  next();
};
