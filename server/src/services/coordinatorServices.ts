import Coordinator from "../models/coordinatorModel";

class CoordinatorServices {
  static async getAllCoordinator() {
    try {
      return await Coordinator.findAll();
    } catch (error) {
      return error;
    }
  }

  static async getCoordinatorById(id: number) {
    try {
      return await Coordinator.findByPk(id);
    } catch (error) {
      return error;
    }
  }

  static async updateCoordinator(id: number, name: string, email: string) {
    try {
      return await Coordinator.update({ name, email }, { where: { id } });
    } catch (error) {
      return error;
    }
  }

  static async deleteCoordinator(id: number) {
    try {
      return await Coordinator.destroy({ where: { id } });
    } catch (error) {
      return error;
    }
  }
}

export default CoordinatorServices;
