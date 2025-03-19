import { ClassProps } from "../interfaces/classInterface";
import Class from "../models/classModel";

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
