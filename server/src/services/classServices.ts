import { ClassProps } from "../interfaces/classInterface";
import Class from "../models/classModel";
import Student from "../models/studentModel";
import TeacherClassDiscipline from "../models/teacherClassDisciplineModel";

class ClassServices {
  static async createClass({ name, grade, period }: ClassProps) {
    try {
      const newClass = await Class.create({ name, grade, period });
      return newClass;
    } catch (error) {
      return error;
    }
  }

  static async getAllClasses() {
    try {
      const classes = await Class.findAll({});
      return classes;
    } catch (error) {
      return error;
    }
  }

  static async deleteClass(id: number) {
    try {
      await Student.update({ class_id: null }, { where: { class_id: id } });
      await TeacherClassDiscipline.update(
        { class_id: null },
        { where: { class_id: id } }
      );
      const deletedClass = await Class.destroy({ where: { id } });
      return deletedClass;
    } catch (error) {
      return error;
    }
  }

  static async getClassById(id: number) {
    try {
      const classById = await Class.findByPk(id);
      return classById;
    } catch (error) {
      return error;
    }
  }

  static async updateClass(id: number, { name, grade, period }: ClassProps) {
    try {
      const updatedClass = await Class.update(
        { name, grade, period },
        { where: { id } }
      );
      return updatedClass;
    } catch (error) {
      return error;
    }
  }
}

export default ClassServices;
