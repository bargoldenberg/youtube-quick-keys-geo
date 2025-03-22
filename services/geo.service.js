export const getGeoData = async (ip) => {
  const res = await fetch(
    `https://api.ipgeolocation.io/ipgeo?apiKey=${GEO_API_KEY}&ip=${ip}`
  );
  return await res.json();
};
