import express from "express";
import geoRouter from "routes/geo.route.js";
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
