const Express = require("express");
const router = Express.Router();
const AuthenticateUser = require("./middleware/AuthenticateUser");
const CheckAdminUser = require("../middleware/AuthAdminUser");
const { Events } = require("../models/Events");

router.get(
  "/",
  [AuthenticateUser, CheckAdminUser],
  async (request, response) => {
    //get request is made return the list of all the events happening
    const AllEvents = await Events.find();
    return response.status(200).send(AllEvents);
  }
);

//if admins are allowed to make post requests then new events can be added
router.post("/", [AuthenticateUser, CheckAdminUser], (request, response) => {
  const event = new Events({
    ImageUrl: request.body.ImageUrl,
    Title: request.body.Title,
    Caption: request.body.Caption,
    Description: request.body.Description,
    OrganizingClub: request.body.OrganizingClub,
    Date: request.body.Date,
    Venue: request.body.Venue,
    RegistrationLink: request.body.RegistrationLink,
    Note: request.body.Note,
    ContactDetails: request.body.ContactDetails,
  });

  const StatusSave = await event.save();
  response.status(200).send("Event Successfully Created...!");
});
// Delete requests

router.delete(
  "/:DeleteEventId",
  [AuthenticateUser, CheckAdminUser],
  async (request, response) => {
    //delete the event with the id provided in the params
    const DeleteEvent = await Events.findByIdAndRemove(
      request.params.DeleteEventId
    );
    if (!DeleteEvent)
      return response.status(400).send("Sorry..! .Event Not found...!");

    response.status(200).send(DeleteEvent);
  }
);
module.exports = {
  router,
};

//Note: Once if the user is in this module it means that he is already a super user or admin so
//it is good enough to just check if the user is logged in for every sub end point here after.
