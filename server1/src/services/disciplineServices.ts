import { DisciplineProps } from "../interfaces/disciplineInterface";
import Discipline from "../models/disciplineModel";
import TeacherClassDiscipline from "../models/teacherClassDisciplineModel";

class DisciplineServices {
  static async createDiscipline({ name, grade }: DisciplineProps) {
    const discipline = await Discipline.create({ name, grade });
    return discipline;
  }

  static async getAllDisciplines() {
    const disciplines = await Discipline.findAll({});
    return disciplines;
  }

  static async getDisciplineById(id: number) {
    const discipline = await Discipline.findByPk(id);
    return discipline;
  }

  static async updateDiscipline(id: number, { name, grade }: DisciplineProps) {
    const updatedDiscipline = await Discipline.update(
      { name, grade },
      { where: { id } }
    );
    return updatedDiscipline;
  }

  static async deleteDiscipline(id: number) {
    await TeacherClassDiscipline.update(
      { discipline_id: null },
      { where: { discipline_id: id } }
    );
    const deletedDiscipline = await Discipline.destroy({ where: { id } });
    return deletedDiscipline;
  }
}

export default DisciplineServices;
