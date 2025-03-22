export const extractIPFromRequest = (req) => {
  console.log(JSON.stringify(req));
  const forwarded = req.headers["x-forwarded-for"];
  const ip = forwarded
    ? forwarded.split(",").pop().trim()
    : req.connection.remoteAddress;
  return ip;
};
