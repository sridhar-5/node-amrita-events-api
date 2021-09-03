const express = require("express");
const { User } = require("../models/Users");

module.exports = async function (request, response, next) {
  //querying the database to check if the user is admin
  const CheckUsersIsAdmin = await User.findOne({
    username: request.user.username,
  });
  //for debuggling purpose
  console.log(CheckUsersIsAdmin);

  if (!CheckUsersIsAdmin.isAdmin) {
    //if the user is not an admin then rendering back the client side views
    next();
  } else {
    //debugging purposes
    //console.log("only for admins");
    response.redirect("/api/admin-users-portal");
  }
};
