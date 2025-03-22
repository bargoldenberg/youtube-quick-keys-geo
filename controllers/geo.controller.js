import { extractIPFromRequest } from "../../utils/requestUtils";
import { getGeoData } from "../services/geo.service";
export const geo = async (req, res) => {
  try {
    const ip = extractIPFromRequest(req);
    const geoData = await getGeoData(ip);
    await res.json(geoData);
  } catch {
    res.sendStatus(500);
  }
};
