import { DataTypes, Model } from "sequelize";
import database from "../config/database";

class Teacher extends Model {
  declare id: number;
  declare name: string;
  declare email: string;
  declare password: string;
}

Teacher.init(
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
    tableName: "teachers",
    timestamps: false,
  }
);
