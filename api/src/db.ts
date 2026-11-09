import pg from "pg";

import { config } from "./config.js";

// Lazily-usable pool. Creating it does not open a connection,
// so the API can boot (and /health can respond) before Postgres is set up.
export const pool = new pg.Pool({
  connectionString: config.databaseUrl || undefined,
  max: 10,
  idleTimeoutMillis: 30_000,
});

pool.on("error", (err) => {
  console.error("Unexpected Postgres pool error:", err.message);
});

export async function checkDb(): Promise<boolean> {
  if (!config.databaseUrl) return false;
  try {
    await pool.query("SELECT 1");
    return true;
  } catch {
    return false;
  }
}
