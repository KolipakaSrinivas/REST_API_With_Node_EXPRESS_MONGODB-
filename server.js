const express = require("express");
const env = require("dotenv");

const dbConnection = require("./db-connection");
const subscribersRouter = require("./routes/subscribersRouter");

env.config();
const app = express();
app.use(express.json());

dbConnection(process.env.db_URL);
app.use("/subscribers", subscribersRouter);

app.listen(3000, () => console.log("server is started"));
