
import JWT from "jsonwebtoken";

const generateAccessToken = (user) => JWT.sign(user, 'otorrinolagingologista', {expiresIn: "1d" });
const verifyAccessToken = (token) => JWT.verify(token, 'otorrinolagingologista');

export default {generateAccessToken,verifyAccessToken};