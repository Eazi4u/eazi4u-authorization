import jwt from "jsonwebtoken";

function authCheck(req, res, next) {
  const token = req.header("x-auth-token");
  if (!token) {
    return res.status(401).send("Access denied. No token provided");
  }

  try {
    const decoded = jwt.verify(token, "mike");
    req.user = decoded;
    next();
  } catch (err) {
    res.status(400).send("Invalid token.");
  }

}

export default authCheck;
