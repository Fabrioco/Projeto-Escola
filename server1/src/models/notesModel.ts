import { DataTypes, Model } from "sequelize";
import database from "../config/database";

class Notes extends Model {
  declare id: number;
  declare student_id: number;
  declare discipline_id: number;
  declare date: Date;
}

Notes.init(
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
    discipline_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "discipline",
        key: "id",
      },
    },
    note: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize: database,
    tableName: "notes",
    timestamps: false,
  }
);

export default Notes;
