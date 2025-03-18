import { PresenceProps } from "../interfaces/presenceInterface";
import Presence from "../models/presence";

class PresenceServices {
  static async getPresence(id: number) {
    const presence = await Presence.findByPk(id);
    return presence;
  }

  static async getAllPresences() {
    const presences = await Presence.findAll();
    return presences;
  }

  static async createPresence({ student_id, date, presence }: PresenceProps) {
    const present = await Presence.create({ student_id, date, presence });
    return present;
  }

  static async deletePresence(id: number) {
    const deletedPresence = await Presence.destroy({ where: { id } });
    return deletedPresence;
  }

  static async updatePresence(
    id: number,
    { student_id, date, presence }: PresenceProps
  ) {
    const updatedPresence = await Presence.update(
      { student_id, date, presence },
      { where: { id } }
    );
    return updatedPresence;
  }
}

export default PresenceServices;
