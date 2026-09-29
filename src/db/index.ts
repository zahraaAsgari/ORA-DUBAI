import { drizzle, type NodePgDatabase } from "drizzle-orm/node-postgres";
import { Pool } from "pg";

// Lazily create the pool so that importing this module never throws during
// `next build` (e.g. on Vercel when DATABASE_URL is only set at runtime).
const globalForDb = globalThis as typeof globalThis & {
  __oraPool?: Pool;
  __oraDb?: NodePgDatabase;
};

export function hasDatabase() {
  return Boolean(process.env.DATABASE_URL);
}

export function getDb(): NodePgDatabase {
  if (globalForDb.__oraDb) return globalForDb.__oraDb;
  const databaseUrl = process.env.DATABASE_URL;
  if (!databaseUrl) throw new Error("DATABASE_URL is required");
  const pool =
    globalForDb.__oraPool ??
    new Pool({
      connectionString: databaseUrl,
      ssl: /sslmode=require|neon\.tech|supabase|vercel-storage/.test(databaseUrl) ? { rejectUnauthorized: false } : undefined,
      max: 5,
    });
  globalForDb.__oraPool = pool;
  globalForDb.__oraDb = drizzle(pool);
  return globalForDb.__oraDb;
}
