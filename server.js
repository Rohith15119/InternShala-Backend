import dotenv from "dotenv";
import app from "./src/app.js";
import sequelize from "./config/db.js";

dotenv.config();

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    await sequelize.authenticate({ alter: true });

    console.log("Database connection established successfully.");

    await sequelize.sync();

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Unable to connect to the database:", error);
    process.exit(1);
  }
};

startServer();
