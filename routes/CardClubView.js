const { Events } = require("../models/Events");

const { Club } = require("../models/Club");

const Express = require("express");
const _ = require("lodash");
const router = Express.Router();

//importing middle ware
const AuthenticateUser = require("../middleware/AuthenticateUser");
const RedirectAdminUser = require("../middleware/RedirectAdminUser");

router.get("/", AuthenticateUser, async (request, response) => {
  const Clubs = await Club.find({});
  console.log(Clubs);

  response.status(200).send(Clubs);
});

router.get(
  "/fetchEvents/:ClubName",
  AuthenticateUser,
  async (request, response) => {
    const ClubName = request.params.ClubName;
    const EventsConductedByClub = await Events.find({
      OrganizingClub: ClubName,
    });

    //for debugging purposes
    console.log(EventsConductedByClub);
    if (EventsConductedByClub.length === 0) {
      return response.status(404).send("No events conducted by this club");
    }
    response.status(200).send(EventsConductedByClub);
  }
);

module.exports = router;
