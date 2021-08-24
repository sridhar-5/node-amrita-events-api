const mongoose = require("mongoose");

const Contacts = mongoose.Schema({
  Name: {
    type: String,
  },
  Phone: {
    type: String,
  },
});
module.exports = {
  Contacts,
};
