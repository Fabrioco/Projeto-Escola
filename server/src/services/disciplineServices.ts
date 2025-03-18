import { DisciplineProps } from "../interfaces/disciplineInterface";
import Discipline from "../models/discipline";

class DisciplineServices {
  async createDiscipline({ name, grade }: DisciplineProps) {
    const discipline = await Discipline.create({ name, grade });
    return discipline;
  }

  async getAllDisciplines() {
    const disciplines = await Discipline.findAll({});
    return disciplines;
  }

  async getDisciplineById(id: number) {
    const discipline = await Discipline.findByPk(id);
    return discipline;
  }

  async updateDiscipline(id: number, { name, grade }: DisciplineProps) {
    const updatedDiscipline = await Discipline.update(
      { name, grade },
      { where: { id } }
    );
    return updatedDiscipline;
  }

  async deleteDiscipline(id: number) {
    const deletedDiscipline = await Discipline.destroy({ where: { id } });
    return deletedDiscipline;
  }
}

export default DisciplineServices;