const { Events } = require("../models/Events");
const Express = require("express");
const _ = require("lodash");
const router = Express.Router();
//importing middle ware
const AuthenticateUser = require("../middleware/AuthenticateUser");
const RedirectAdminUser = require("../middleware/RedirectAdminUser");

router.get(
  "/",
  [AuthenticateUser, RedirectAdminUser],
  async (request, response) => {
    const AllActiveEvents = await Events.find();
    response
      .status(200)
      .send(
        _.pick(AllActiveEvents, ["_id", "Title", "OrganizingClub", "Date"])
      );
  }
);

//when clicked call this end point using the event id
router.get("/:SelectedEventId", AuthenticateUser, async (request, response) => {
  const SelectedEventDetails = await Events.find({
    _id: request.params.SelectedEventId,
  });
  //if no event exists send 400 status
  if (!SelectedEventDetails) {
    response.status(400).send("Sorry..! Bad Request");
  }
  // if event exists then render the specific event details and send 200 status code
  response.status(200).send(SelectedEventDetails);
});

module.exports = router;
