import { DataTypes, Model } from "sequelize";
import database from "../config/database";
import Student from "./student";

class Class extends Model {
  declare id: number;
  declare name: string;
  declare grade: number;
  declare period: "Manhã" | "Tarde" | "Noite";
}

Class.init(
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
    grade: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    period: {
      type: DataTypes.ENUM("Manhã", "Tarde", "Noite"),
      allowNull: false,
    },
  },
  {
    sequelize: database,
    tableName: "class",
    timestamps: false,
  }
);

export default Class;
