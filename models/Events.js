const Joi = require("joi");
const mongoose = require("mongoose");
const Contacts = require("../models/ContactDetails");
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
    type: Date,
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
  Note: {
    type: String,
  },
  ContactDetails: {
    type: [Contacts],
  },
  // Status: {
  //   type: String,
  //   enum: ["Completed", "Upcoming", "Ongoing"],
  // },
});

//creating a model for this mongo schema
const Events = mongoose.model("Event", EventSchema);

module.exports = {
  Events: Events,
};
