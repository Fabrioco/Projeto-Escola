import { Model, DataTypes } from "sequelize";
import database from "../config/database";

class Schedule extends Model {
  declare id: number;
  declare time: string;
}

Schedule.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    time: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize: database,
    tableName: "schedules",
    timestamps: false,
  }
);

export default Schedule;
