import { getDb, hasDatabase } from "@/db";
import { sql } from "drizzle-orm";

export const dynamic = "force-dynamic";

export async function GET() {
  if (!hasDatabase()) {
    // App is healthy; database is simply not configured.
    return Response.json({ ok: true, database: "not-configured" });
  }
  try {
    await getDb().execute(sql`select 1`);
    return Response.json({ ok: true, database: "connected" });
  } catch {
    return Response.json({ ok: false, database: "error" }, { status: 500 });
  }
}
