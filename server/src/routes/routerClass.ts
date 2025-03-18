import Express from "express";
import Class from "../models/class";
import classController from "../controllers/classController";

const routerClass = Express.Router();

routerClass.get("/", (req, res) => {
  classController.getAllClasses(req, res);
});

routerClass.get("/:id", (req, res) => {
  classController.getClassById(req, res);
});

routerClass.post("/", (req, res) => {
  classController.createClass(req, res);
});

routerClass.put("/:id", (req, res) => {
  classController.updateClass(req, res);
});

routerClass.delete("/:id", (req, res) => {
  classController.deleteClass(req, res);
});

export default routerClass;
