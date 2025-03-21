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
}

export default ScheduleServices;
