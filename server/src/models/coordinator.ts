import { DataTypes, Model } from "sequelize";
import database from "../config/database";

class Coordinator extends Model {
  declare id: number;
  declare name: string;
  declare email: string;
  declare password: string;
}

Coordinator.init(
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
    admin: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  },
  {
    sequelize: database,
    tableName: "coordinator",
    timestamps: false,
  }
);

export default Coordinator;
