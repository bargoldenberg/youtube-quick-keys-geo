import express from "express";
import dotenv from "dotenv";
import geoRouter from "./routes/geo.route.js";
import { LRUCache } from "./utils/LRU.js";

dotenv.config();
LRUCache.getInstance(1000);

const app = express();
const port = process.env.PORT || 10000;

app.use(geoRouter);
app.set("trust proxy", true);
app
  .listen(port, () => {
    console.log(`server is ready on port ${port}`);
  })
  .on("error", () => {
    console.log("error in starting server");
  });
