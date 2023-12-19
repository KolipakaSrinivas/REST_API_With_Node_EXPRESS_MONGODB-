const mongoose = require("mongoose");

function dbConnection(DB_URL) {
  mongoose
    .connect(DB_URL)
    .then(() => {
      console.log("Connected to DB");
    })
    .catch((error) => {
      console.log(error.message);
    });
}

module.exports = dbConnection;

// db.on('error' , (error) => console.log(error))
// db.once('open',() => console.log("connected to db"))
