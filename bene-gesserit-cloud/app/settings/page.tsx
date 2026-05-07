import { Nav } from "@/components/Nav";
import { SettingsForm } from "@/components/SettingsForm";
import { db } from "@/db/client";
import { config } from "@/db/schema";

export const dynamic = "force-dynamic";

export default async function SettingsPage() {
  const rows = await db.select().from(config);
  const initial: Record<string, string> = {};
  rows.forEach((r) => {
    if (r.value !== null) initial[r.key] = r.value;
  });

  return (
    <>
      <Nav active="settings" />
      <SettingsForm initial={initial} />
    </>
  );
}
