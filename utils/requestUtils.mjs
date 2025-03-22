export const extractIPFromRequest = (req) => {
  const forwarded = req.headers["x-forwarded-for"];
  const ip = forwarded
    ? forwarded.split(",").pop().trim()
    : req.connection.remoteAddress;
  return ip;
};
