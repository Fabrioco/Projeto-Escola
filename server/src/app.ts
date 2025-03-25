import Express from "express";
import database from "./config/database";
import { configDotenv } from "dotenv";
import routerAuth from "./routes/routerAuth";
import routerCreate from "./routes/routerCreate";
import routerClass from "./routes/routerClass";
import routerDiscipline from "./routes/routerDiscipline";
import routerPresence from "./routes/routerPresence";
import routerNote from "./routes/routerNote";
import routerVerifyCoordinator from "./routes/routerVerify";
import routerTeacherClassDiscipline from "./routes/routerTeacherClassDiscipline";
import routerSchedule from "./routes/routerSchedule";
import routerStudent from "./routes/routerStudent";
import routerTeacher from "./routes/routerTeacher";
const cors = require("cors");

configDotenv();
const app = Express();
app.use(Express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
const PORT = process.env.PORT || 5000;

app.use("/api/auth", routerAuth);
app.use("/api/create", routerCreate);
app.use("/api/class", routerClass);
app.use("/api/discipline", routerDiscipline);
app.use("/api/presence", routerPresence);
app.use("/api/note", routerNote);
app.use("/api/auth/verify", routerVerifyCoordinator);
app.use("/api/directory", routerTeacherClassDiscipline);
app.use("/api/schedule", routerSchedule);
app.use("/api/student", routerStudent);
app.use("/api/teacher", routerTeacher);

database.sync().then(() => {
  app.listen(PORT, () => {
    console.log("Servidor ta ligado");
  });
});
