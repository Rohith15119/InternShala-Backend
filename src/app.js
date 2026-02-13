import morgan from "morgan";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import authRoutes from "../routes/auth.routes.js";
import taskRoutes from "../routes/task.routes.js";
import { swaggerUi, specs } from "../config/swagger.js";

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));
app.use(morgan("dev"));
app.use(helmet());
app.use(express.json());

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/tasks", taskRoutes);

app.get("/", (req, res) => {
  res.send("Backend is running 🔥 !");
});

// Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({
    message: err.message || "Internal Server Error",
  });
});

export default app;
