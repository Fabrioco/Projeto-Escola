import Express from "express";
import database from "./config/database";
import { configDotenv } from "dotenv";
import routerAuth from "./routes/routerAuth";

configDotenv();
const app = Express();
app.use(Express.json());

const PORT = process.env.PORT || 5000;

app.use('/api', routerAuth)

database.sync().then(() => {
  app.listen(PORT, () => {
    console.log("Servidor ta ligado");
  });
});
