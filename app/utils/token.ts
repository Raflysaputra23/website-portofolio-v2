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

const createToken = () => {
  return jwt.sign({ username: "M. Rafly Saputra", email: "raflysl23@gmail.com" }, process.env.SECRET_KEY_VALIDATION as string, { expiresIn: "1m" });
};

export { validasiToken, createToken };
