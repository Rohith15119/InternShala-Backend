import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";
import User from "./user.model.js";

const Task = sequelize.define(
  "Task",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  },
  {
    timestamps: true, // it will adds createdAt & updatedAt
  },
);

User.hasMany(Task, {
  foreignKey: "userId",
  onDelete: "CASCADE",
});

Task.belongsTo(User, {
  foreignKey: "userId",
});

export default Task;
