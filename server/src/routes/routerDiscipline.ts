import Express from "express";
import disciplineController from "../controllers/disciplineController";

const routerDiscipline = Express.Router();

routerDiscipline.get("/", (req, res) => {
  disciplineController.getAllDisciplines(req, res);
});

routerDiscipline.get("/:id", (req, res) => {
  disciplineController.getDisciplineById(req, res);
});

routerDiscipline.post("/", (req, res) => {
  disciplineController.createDiscipline(req, res);
});

routerDiscipline.put("/:id", (req, res) => {
  disciplineController.updateDiscipline(req, res);
});

routerDiscipline.delete("/:id", (req, res) => {
  disciplineController.deleteDiscipline(req, res);
});

export default routerDiscipline;
