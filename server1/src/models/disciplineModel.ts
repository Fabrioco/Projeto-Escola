import { DataTypes, Model } from "sequelize";
import database from "../config/database";

class Discipline extends Model {
  declare id: number;
  declare name: string;
  declare grade: number;
}

Discipline.init(
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
  },
  {
    sequelize: database,
    tableName: "discipline",
    timestamps: false,
  }
);

export default Discipline;