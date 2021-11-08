const Joi = require("joi");
const mongoose = require("mongoose");

const clubSchema = new mongoose.Schema({
  ClubImageUrl: {
    type: String,
    required: true,
  },
  ClubName: {
    type: String,
    required: true,
  },
  ClubDescription: {
    type: String,
    required: true,
  },
  InstaHandle: {
    type: String,
    required: true,
  },
});

const Club = mongoose.model("Club", clubSchema);

module.exports = { Club };
