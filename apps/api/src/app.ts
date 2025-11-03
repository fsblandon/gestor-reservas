import express from "express";
import { authApiKey } from "./middleware/authApiKey";
import { errorHandler } from "./middleware/errorHandler";
import routes from "./routes";
import cors from "cors";

const app = express();

app.use(cors({
  origin: ["http://localhost:5173"],
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization", "x-api-key"],
  credentials: true
}));

app.options(/.*/, cors());

app.use(express.json());

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

app.use((req, res, next) => {
  console.log("➡️ Pasando por middleware global:", req.method, req.path);
  next();
});
/*app.use((req, res, next) => {
  if(req.method === "OPTIONS") {
    return res.sendStatus(204);
  }
  next();
});*/

app.use((req, res, next) => {
  console.log("🔐 Antes de authApiKey");
  next();
});

app.use(authApiKey);
app.use("/api", routes);
app.use(errorHandler);

export default app;