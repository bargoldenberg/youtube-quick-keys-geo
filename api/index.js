import express from "express";
import ServerlessHttp from "serverless-http";
import geoRouter from "../routes/geo.route.js";
const app = express(geoRouter);

export default ServerlessHttp(app);
