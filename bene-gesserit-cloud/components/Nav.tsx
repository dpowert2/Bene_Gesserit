import Link from "next/link";

const LINKS = [
  { href: "/", label: "Radar" },
  { href: "/pipeline", label: "Pipeline" },
  { href: "/kanban", label: "Kanban" },
  { href: "/changelog", label: "Changelog" },
  { href: "/settings", label: "Settings" },
];

export function Nav({ active }: { active?: string }) {
  return (
    <nav className="border-b border-line bg-sand sticky top-0 z-50">
      <div className="max-w-[1480px] mx-auto px-6 py-2.5 flex items-center justify-between gap-4">
        <Link href="/" className="text-serif text-lg text-ink-heading tracking-tight no-underline">
          Bene Gesserit
        </Link>
        <div className="flex gap-2">
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`pill ${active === l.label.toLowerCase() ? "active" : ""}`}
            >
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
