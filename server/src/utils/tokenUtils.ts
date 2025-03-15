import jwt from "jsonwebtoken";
import { AuthConfig } from "../config/authConfig";

export function generateToken(userId: number, keepLogged: boolean) {
  if (!keepLogged) {
    return jwt.sign({ id: userId }, AuthConfig.secret, { expiresIn: "1d" });
  }
  return jwt.sign({ id: userId }, AuthConfig.secret);
}
