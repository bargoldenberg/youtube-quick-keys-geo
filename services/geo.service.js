import fetch from "node-fetch";
import { LRUCache } from "../utils/LRU.js";

export const getGeoData = async (ip) => {
  const cache = LRUCache.getInstance();
  if (!cache.has(ip)) {
    const res = await fetch(
      `https://api.ipgeolocation.io/ipgeo?apiKey=${process.env.GEO_API_KEY}&ip=${ip}`
    );
    const geoData = await res.json();
    cache.put(ip, geoData);
  }
  return cache.get(ip);
};
