//importing dependencies
const Express = require("express");
const DBConnection = require("./configs/DatabaseConnection");
const LoginUser = require("./routes/LoginUser");
const app = Express();

app.use(Express.json());

//connecting to the database
DBConnection();

//routes
app.use("/api/login", LoginUser);

const PORT = process.env.PORT || 3000;
//listening
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
