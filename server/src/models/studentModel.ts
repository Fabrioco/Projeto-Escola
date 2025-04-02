import { DataTypes, Model, ModelCtor } from "sequelize";
import database from "../config/database";
import Class from "./classModel";

class Student extends Model {
  declare id: number;
  declare name: string;
  declare email: string;
  declare password: string;
}

Student.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize: database,
    tableName: "students",
    timestamps: false,
  }
);

export default Student;
