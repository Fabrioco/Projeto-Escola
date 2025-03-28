import { Model, DataTypes } from "sequelize";
import database from "../config/database";

class TeacherClassDiscipline extends Model {
  declare id: number;
  declare teacher_id: number;
  declare class_id: number;
  declare discipline_id: number;
}

TeacherClassDiscipline.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    teacher_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "teacher",
        key: "id",
      },
    },
    class_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "class",
        key: "id",
      },
    },
    discipline_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "discipline",
        key: "id",
      },
    },
    time: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "schedules",
        key: "id",
      },
    },
  },
  {
    sequelize: database,
    tableName: "teacher_class_discipline",
    timestamps: false,
  }
);

export default TeacherClassDiscipline;
