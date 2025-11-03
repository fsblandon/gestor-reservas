import dotenv from "dotenv";
dotenv.config();
console.log("🔑 API_KEY esperada:", process.env.API_KEY);

import app from "./app";
const PORT = Number(process.env.PORT) || 3333;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});