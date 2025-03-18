import jwt, { JwtPayload } from "jsonwebtoken";
import Student from "../models/student";
import { NextFunction, Request, Response } from "express";
import { AuthConfig } from "../config/authConfig";

export interface CustomRequest extends Request {
  token: string | JwtPayload;
}

export const studentAuthMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) {
    return res.status(401).json({ error: "Token não recebido" });
  }

  try {
    const decoded = jwt.verify(token, AuthConfig.secret) as JwtPayload;
    (req as CustomRequest).token = decoded;
    next();
  } catch (error) {
    res.status(401).send("Por favor, faça login");
  }
};
