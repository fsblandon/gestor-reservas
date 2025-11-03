// src/middleware/authApiKey.ts
import { Request, Response, NextFunction } from 'express';

const API_KEY = process.env.API_KEY;

export const authApiKey = (req: Request, res: Response, next: NextFunction) => {
  if (req.method === "OPTIONS") {
    return res.sendStatus(204);
  }

  const apiKeyHeader = req.header("x-api-key");
  const expectedKey = process.env.API_KEY;
  console.log("🔑 API_KEY esperada:", process.env.API_KEY);

  if (!expectedKey) {
    console.warn("⚠️  No hay API_KEY configurada en el backend (.env)");
    return res.status(500).json({ message: "API_KEY no configurada" });
  }

  if (!apiKeyHeader || apiKeyHeader !== expectedKey) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  next();
};
