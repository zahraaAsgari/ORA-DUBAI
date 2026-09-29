import { db } from "@/db";
import { leads } from "@/db/schema";

export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as Record<string, unknown>;
    const name = String(body.name ?? "").trim().slice(0, 200);
    const email = String(body.email ?? "").trim().slice(0, 200);
    const interest = String(body.interest ?? "Private Consultation").slice(0, 100);
    const message = body.message ? String(body.message).slice(0, 2000) : null;
    if (!name || !/^\S+@\S+\.\S+$/.test(email)) {
      return Response.json({ ok: false, error: "Please provide a valid name and email." }, { status: 400 });
    }
    await db.insert(leads).values({ name, email, interest, message });
    return Response.json({ ok: true });
  } catch {
    return Response.json({ ok: false, error: "Unable to submit right now." }, { status: 500 });
  }
}
