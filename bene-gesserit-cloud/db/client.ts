import { createClient } from "@libsql/client";
import { drizzle } from "drizzle-orm/libsql";
import * as schema from "./schema";

const url = process.env.DATABASE_URL;
if (!url) throw new Error("DATABASE_URL is required");

const client = createClient({
  url,
  authToken: process.env.DATABASE_AUTH_TOKEN,
});

/**
 * Drizzle DB client. Import this anywhere you need DB access.
 *
 * Example:
 *   import { db } from "@/db/client";
 *   import { startups } from "@/db/schema";
 *   const rows = await db.select().from(startups);
 */
export const db = drizzle(client, { schema });

export type DB = typeof db;
