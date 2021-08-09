const mongoose = require("mongoose");

//Connecting the Database
async function ConnectDatabase() {
  const DatabaseConnection = await mongoose.connect(
    //returns Promise
    "mondogb://localhost:27017/AmritaEventsApi",
    {
      useNewUrlParser: true,
      useFindAndModify: true,
      useUnifiedTopology: true,
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
