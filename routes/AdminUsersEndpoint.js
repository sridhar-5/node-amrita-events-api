const Express = require("express");
const router = Express.Router();
const AuthenticateUser = require("./middleware/AuthenticateUser");

router.get("/", AuthenticateUser, (request, response) => {
  //admin side
});
module.exports = {
  router,
};

//Note: Once if the user is in this module it means that he is already a super user or admin so
//it is good enough to just check if the user is logged in for every sub end point here after.
