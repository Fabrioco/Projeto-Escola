import { Model, DataTypes } from "sequelize";
import database from "../config/database";

class StudentClass extends Model {
  declare id: number;
  declare student_id: number;
  declare class_id: number;
}

StudentClass.init(
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
    class_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "class",
        key: "id",
      },
    },
  },
  {
    sequelize: database,
    tableName: "student_class",
    timestamps: false,
  }
);

export default StudentClass;
