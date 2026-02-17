"use server";

import jwt from "jsonwebtoken";

const validasiToken = async (token: string) => {
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

const createToken = async () => {
  return jwt.sign({ username: "M. Rafly Saputra", email: "raflysl23@gmail.com" }, process.env.SECRET_KEY_VALIDATION as string, { expiresIn: "1m" });
};

export { validasiToken, createToken };
