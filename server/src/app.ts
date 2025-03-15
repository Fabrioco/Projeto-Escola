import Express from "express";
import database from "./config/database";
import { configDotenv } from "dotenv";

configDotenv();
const app = Express();

const PORT = process.env.PORT;

database.sync().then(() => {
  app.listen(PORT, () => {
    console.log("Servidor ta ligado");
  });
});
