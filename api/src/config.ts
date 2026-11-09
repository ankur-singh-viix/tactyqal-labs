import "dotenv/config";

function num(value: string | undefined, fallback: number): number {
  const n = Number(value);
  return Number.isFinite(n) && n > 0 ? n : fallback;
}

export const config = {
  port: num(process.env.PORT, 4000),
  databaseUrl: process.env.DATABASE_URL ?? "",
  adminApiKey: process.env.ADMIN_API_KEY ?? "",
  corsOrigin: process.env.CORS_ORIGIN ?? "http://localhost:3000",
};
