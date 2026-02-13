import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import path from "path";
import { fileURLToPath } from "url";

// Needed for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Task Management API",
      version: "1.0.0",
      description: "Backend Internship Assignment API",
    },
    servers: [
      {
        url: "http://localhost:5000",
      },
    ],
  },
  apis: [path.join(__dirname, "../routes/*.js")], // 🔥 THIS IS IMPORTANT
};

const specs = swaggerJsdoc(options);

export { swaggerUi, specs };
