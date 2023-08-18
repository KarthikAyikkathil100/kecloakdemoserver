import dotenv from "dotenv";
import express from "express";

import documents from "./Routes/documents.js";
import authenticate from "./Routes/authenticate.js";

(async function () {
  dotenv.config();

  const { PORT } = process.env;
  const app = express();
  // CORS permission
  app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, DELETE, OPTIONS");
    next();
  });
  const server = app.listen(PORT, () =>
    console.log(`Backend started on port ${PORT}`)
  );
  app.get('/test', (req, res) => {
    res.send('Server is runmning!!')
  });

  app.use("/documents", authenticate, documents);
})();
