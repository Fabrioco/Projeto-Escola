import { StudentsInterface } from "../interfaces/studentsInterface";
import Student from "../models/studentModel";

class StudentServices {
  static async getStudents() {
    try {
      const students = await Student.findAll();
      return students;
    } catch (error) {
      console.error(error);
      return error;
    }
  }

  static async getStudentById(id: number) {
    try {
      const student = await Student.findByPk(id);
      return student;
    } catch (error) {
      console.error(error);
      return error;
    }
  }

  static async deleteStudent(id: number) {
    try {
      const student = await Student.findByPk(id);
      if (student) {
        await student.destroy();
      }
      return student;
    } catch (error) {
      return error;
    }
  }

  static async updateStudent({
    id,
    name,
    email,
    password,
    class_id,
    period,
  }: StudentsInterface) {
    try {
      const student = await Student.findByPk(id);
      if (student) {
        await student.update({
          name,
          email,
          password,
          class_id,
          period,
        });
      }
      return student;
    } catch (error) {
      return error;
    }
  }
}

export default StudentServices;
