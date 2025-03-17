import { DataTypes, Model, ModelCtor } from "sequelize";
import database from "../config/database";
import Class from "./class";

class Student extends Model {
  declare id: number;
  declare name: string;
  declare email: string;
  declare password: string;
  declare class_id: number;
  declare period: "Manhã" | "Tarde" | "Noite";
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
    class_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "class",
        key: "id",
      },
    },
    period: {
      type: DataTypes.ENUM("Manhã", "Tarde", "Noite"),
      allowNull: false,
    },
  },
  {
    sequelize: database,
    tableName: "students",
    timestamps: false,
  }
);

Student.belongsTo(Class, {
  foreignKey: "class_id",
});

export default Student;
