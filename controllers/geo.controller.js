import { extractIPFromRequest } from "../utils/requestUtils.mjs";
import { getGeoData } from "../services/geo.service.js";
export const geo = async (req, res) => {
  try {
    const ip = extractIPFromRequest(req);
    const geoData = await getGeoData(ip);
    await res.json(geoData);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
};
