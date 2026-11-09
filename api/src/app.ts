import cors from "cors";
import express from "express";
import helmet from "helmet";

import { config } from "./config.js";
import { checkDb } from "./db.js";

export function createApp() {
  const app = express();

  app.use(helmet());
  app.use(cors({ origin: config.corsOrigin }));
  app.use(express.json({ limit: "1mb" }));

  // Liveness + database status. Always 200 so the process is considered alive;
  // `db` reports whether Postgres is reachable.
  app.get("/health", async (_req, res) => {
    const db = await checkDb();
    res.json({
      status: "ok",
      db: db ? "connected" : "unavailable",
      uptime: Math.round(process.uptime()),
      timestamp: new Date().toISOString(),
    });
  });

  app.use((_req, res) => {
    res.status(404).json({ error: "Not found" });
  });

  return app;
}
