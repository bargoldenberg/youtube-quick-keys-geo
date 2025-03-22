import express from "express";
import dotenv from "dotenv";
import geoRouter from "./routes/geo.route.js";
dotenv.config();
const app = express();
const port = 3000;
app.use(geoRouter);
app
  .listen(port, () => {
    console.log(`server is ready on port ${port}`);
  })
  .on("error", () => {
    console.log("error in starting server");
  });
