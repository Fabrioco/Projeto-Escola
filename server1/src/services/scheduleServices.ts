import Schedule from "../models/scheduleModel";

class ScheduleServices {
  static async createSchedule(time: string) {
    try {
      const schedule = await Schedule.create({ time });
      return schedule;
    } catch (error) {
      return error;
    }
  }

  static async getAllSchedules() {
    try {
      const schedules = await Schedule.findAll({ raw: true });
      return schedules;
    } catch (error) {
      return error;
    }
  }

  static async getSchedule(id: number) {
    try {
      const schedule = await Schedule.findOne({ where: { id }, raw: true });
      return schedule;
    } catch (error) {
      return error;
    }
  }

  static async deleteSchedule(id: number) {
    try {
      const schedule = await Schedule.destroy({ where: { id } });
      return schedule;
    } catch (error) {
      return error;
    }
  }

  static async updateSchedule(id: number, time: string) {
    try {
      const schedule = await Schedule.update({ time }, { where: { id } });
      return schedule;
    } catch (error) {
      return error;
    }
  }
}

export default ScheduleServices;
