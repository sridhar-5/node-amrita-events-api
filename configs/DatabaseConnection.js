const mongoose = require("mongoose");
require("dotenv").config();

//Connecting the Database
function ConnectDatabase() {
  var DatabaseConnection = mongoose.connect(
    //returns Promise
    `mongodb+srv://${process.env.DATABASE_USER}:${process.env.DATABASE_USER_PASSWORD}@amritaevents.j3vp7.mongodb.net/${process.env.DATABASE_NAME}?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
      useCreateIndex: true,
    }
  );

  DatabaseConnection.then(() => {
    console.log("Connection to the database successfully");
  });
  DatabaseConnection.catch((error) => {
    console.log(`Connection Refused...${error}`);
  });
}
module.exports = ConnectDatabase;
