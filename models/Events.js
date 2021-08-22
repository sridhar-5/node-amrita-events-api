const Joi = require("joi");
const mongoose = require("mongoose");

const EventSchema = mongoose.Schema({
  ImageUrl: {
    type: String,
    required: true,
  },
  Title: {
    type: String,
    maxlength: 200,
    minlength: 10,
    required: true,
  },
  Caption: {
    type: String,
    minlength: 10,
    maxlength: 600,
    required: true,
  },
  Description: {
    type: String,
    minlength: 20,
    required: true,
    maxlength: 1600,
  },
  OrganizingClub: {
    type: String,
    minlength: 5,
    maxlength: 75,
    required: true,
  },
  Date: {
    type: String,
    minlength: 5,
    maxlength: 9,
    required: true,
  },
  Venue: {
    type: String,
    minlength: 3,
    maxlength: 50,
    required: true,
  },
  RegistrationLink: {
    type: String,
    minlength: 5,
    required: true,
  },
  Note: {},
  ContactDetails: {
    type: [String],
    /*
      type : [{
      type: Schema.type.ObjectId
      }]
      */
    required: true,
    validate: [
      contactArrayCheck,
      "Contact field should conatain more than zero people",
    ],
  },
});

function contactArrayCheck(val) {
  return val.length > 0;
}

//creating a model for this mongo schema
const Events = mongoose.model("Event", EventSchema);

module.exports = {
  Events: Events,
};
