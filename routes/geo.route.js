import express from "express";
import { geo } from "../controllers/geo.controller.js";

const router = express.Router();

router.get("/geo", geo);

export default router;
