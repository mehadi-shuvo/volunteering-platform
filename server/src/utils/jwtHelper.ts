import jwt, { JwtPayload, Secret, SignOptions } from "jsonwebtoken";

const generateToken = (
  payload: { email: string; name: string },
  secrete: Secret,
  expiresIn: string
) => {
  const token = jwt.sign(payload, secrete, { expiresIn } as SignOptions);

  return token;
};

const tokenVerify = (token: string, secrete: Secret) => {
  return jwt.verify(token, secrete) as JwtPayload;
};

export const jwtHelper = {
  generateToken,
  tokenVerify,
};
