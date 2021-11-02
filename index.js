//importing dependencies
const Express = require("express");

//importing the routes and configs
const DBConnection = require("./configs/DatabaseConnection");
const LoginUser = require("./routes/LoginUser");
const RegisterUser = require("./routes/RegisterUser");
const AdminUsersEndpoint = require("./routes/AdminUsersEndpoint");
const allEvent = require("./routes/EventCards");
const ClubEvents = require("./routes/CardClubView");

const app = Express();

app.use(Express.json());

//connecting to the database
DBConnection();

//routes
app.use("/api/login", LoginUser);
app.use("/api/register", RegisterUser);
app.use("/api/all-events", allEvent);
app.use("/api/admin-users-portal", AdminUsersEndpoint);
app.use("/api/club-events", ClubEvents);

//Homepage Endpoint
app.get("/", (request, response) => {
  response.send("Welcome to the AmritaEvents Api HomePage");
});

const PORT = process.env.PORT || 3000;
//listening
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
