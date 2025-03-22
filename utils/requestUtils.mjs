export const extractIPFromRequest = (req) => {
  console.log(req.ip);
  console.log(req.headers["x-real-ip"]);
  console.log(req.headers["x-forwarded-for"]);

  const forwarded = req.headers["x-forwarded-for"];
  const ip = forwarded
    ? forwarded.split(",").pop().trim()
    : req.connection.remoteAddress;
  return ip;
};
