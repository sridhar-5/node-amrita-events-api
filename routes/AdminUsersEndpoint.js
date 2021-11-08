const Express = require("express");
const router = Express.Router();
const _ = require("lodash");
const AuthenticateUser = require("../middleware/AuthenticateUser");
const CheckAdminUser = require("../middleware/AuthAdminUser");
const { Events } = require("../models/Events");
const { Club, Club } = require("../models/club");

router.get(
  "/",
  [AuthenticateUser, CheckAdminUser],
  async (request, response) => {
    //get request is made return the list of all the events happening
    const AllEvents = await Events.find({});
    var SelectedAttributedForCardView = [];
    AllEvents.forEach((event) => {
      SelectedAttributedForCardView.push(
        _.pick(event, ["_id", "ImageUrl", "Title", "OrganizingClub", "Date"])
      );
    });
    return response.status(200).send(SelectedAttributedForCardView);
  }
);

//expanded event details view admin side
router.get(
  "/:SelectedEventId",
  [AuthenticateUser, CheckAdminUser],
  async (request, response) => {
    const SelectedEvent = await Events.find({
      _id: request.params.SelectedEventId,
    });

    if (!SelectedEvent) {
      return response.status(400).send("Bad Request..!");
    }
    response.status(200).send(SelectedEvent);
  }
);

//admins are allowed to make post requests then new events can be added
router.post(
  "/",
  [AuthenticateUser, CheckAdminUser],
  async (request, response) => {
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
    //debugging purposes
    //console.log(event);
    response.status(200).send("Event Successfully Created...!");
  }
);

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

//creating a new club

router.post(
  "/createClub",
  [AuthenticateUser, CheckAdminUser],
  async (request, response) => {
    const Club = new Club({
      ClubImageUrl: request.body.ClubImageUrl,
      ClubName: request.body.ClubName,
      ClubDescription: request.body.ClubDescription,
      InstaHandle: request.body.InstaHandle,
    });

    const StatusSave = await Club.save();

    response.status(200).send(Club);
  }
);

module.exports = router;
