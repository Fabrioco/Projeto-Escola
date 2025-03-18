import { DataTypes, Model } from "sequelize";
import database from "../config/database";

class Presence extends Model {
  declare id: number;
  declare student_id: number;
  declare date: Date;
  declare present: boolean;
}

Presence.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    student_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "student",
        key: "id",
      },
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    presence: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  },
  {
    sequelize: database,
    tableName: "presence",
    timestamps: false,
  }
);

export default Presence;
