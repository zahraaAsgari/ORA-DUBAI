import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

export const leads = pgTable("leads", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  interest: text("interest").notNull().default("Private Consultation"),
  message: text("message"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});
