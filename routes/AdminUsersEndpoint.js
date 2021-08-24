const Express = require("express");
const router = Express.Router();
const AuthenticateUser = require("./middleware/AuthenticateUser");
const CheckAdminUser = require("../middleware/AuthAdminUser");
const { Events } = require("../models/Events");
const { response } = require("express");

router.get(
  "/",
  [AuthenticateUser, CheckAdminUser],
  async (request, response) => {
    //get request is made return the list of all the events happening
    const AllEvents = await Events.find();
    return response.status(200).send(AllEvents);
  }
);

router.post("/", [AuthenticateUser, CheckAdminUser], (request, response) => {});

module.exports = {
  router,
};

//Note: Once if the user is in this module it means that he is already a super user or admin so
//it is good enough to just check if the user is logged in for every sub end point here after.
