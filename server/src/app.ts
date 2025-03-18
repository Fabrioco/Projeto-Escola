import Express from "express";
import database from "./config/database";
import { configDotenv } from "dotenv";
import routerAuth from "./routes/routerAuth";
import routerCreate from "./routes/routerCreate";
import routerClass from "./routes/routerClass";
import routerDiscipline from "./routes/routerDiscipline";

configDotenv();
const app = Express();
app.use(Express.json());

const PORT = process.env.PORT || 5000;

app.use("/api/auth", routerAuth);
app.use("/api/create", routerCreate);
app.use("/api/class", routerClass);
app.use("/api/discipline", routerDiscipline);

database.sync().then(() => {
  app.listen(PORT, () => {
    console.log("Servidor ta ligado");
  });
});
