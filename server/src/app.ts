import Express from "express";
import database from "./config/database";
import { configDotenv } from "dotenv";
import routerAuth from "./routes/routerAuth";
import routerCreate from "./routes/routerCreate";

configDotenv();
const app = Express();
app.use(Express.json());

const PORT = process.env.PORT || 5000;

app.use("/api/auth", routerAuth);
app.use("/api/create", routerCreate);

database.sync().then(() => {
  app.listen(PORT, () => {
    console.log("Servidor ta ligado");
  });
});
