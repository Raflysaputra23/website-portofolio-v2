"use server";

import jwt from "jsonwebtoken";

const validasiToken = (token: string) => {
  return new Promise((resolve, reject) => {
    jwt.verify(
      token,
      process.env.SECRET_KEY_VALIDATION as string,
      (err, decoded) => {
        if (err) {
          reject(err);
        } else {
          resolve(decoded);
        }
      }
    );
  });
};

type DataProps = {
  username: string;
  email: string;
}

const createToken = (data: DataProps) => {
  return jwt.sign(data, process.env.SECRET_KEY_VALIDATION as string, { expiresIn: "1m" });
};

export { validasiToken, createToken };
