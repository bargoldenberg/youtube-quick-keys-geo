import fetch from "node-fetch";
export const getGeoData = async (ip) => {
  const res = await fetch(
    `https://api.ipgeolocation.io/ipgeo?apiKey=${process.env.GEO_API_KEY}&ip=${ip}`
  );
  return await res.json();
};
