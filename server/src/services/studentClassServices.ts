import StudentClass from "../models/studentClassModel";

class StudentClassServices {
  static async create(student_id: number, class_id: number) {
    try {
      const studentClass = await StudentClass.create({
        student_id,
        class_id,
      });
      return studentClass;
    } catch (error) {
      return error;
    }
  }

  static async delete(student_id: number, class_id: number) {
    try {
      const studentClass = await StudentClass.destroy({
        where: {
          student_id,
          class_id,
        },
      });
      return studentClass;
    } catch (error) {
      return error;
    }
  }
}
export default StudentClassServices;
