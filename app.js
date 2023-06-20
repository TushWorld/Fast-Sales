//enable env variable
import { config } from "dotenv";
config();

import express from "express";
import mongoose from "mongoose";
import apiRoutes from "./routes/app.routes.js";
import cookieParser from "cookie-parser";

const app = express();

const DB_URI = process.env.DB_URI;

app.set("view engine", "ejs");
app.use(express.static("./public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());// to be able to get the data as json
app.use(cookieParser());
//routes
async function startApp() {
  console.log("Starting App...");

  console.log("Connecting to DB...");

  await mongoose.connect(DB_URI);

  //define our routes
  app.use("", apiRoutes);

  console.log("Database connected");

  app.listen(5000, () => {
    console.log(`App is live and running`);
  });
}
startApp();
