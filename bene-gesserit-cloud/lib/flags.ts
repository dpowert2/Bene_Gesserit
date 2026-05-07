/**
 * Geo string → flag emoji. Multi-region geos ("Israel / USA") return up to 2.
 * Identical logic to the current static BG site so visual parity holds.
 */

function singleFlag(s: string): string {
  const g = (s || "").toUpperCase();
  if (/EUROPE\b|EUROPEAN/.test(g)) return "🇪🇺";
  if (/\bEU\b/.test(g)) return "🇪🇺";
  if (/\bUSA\b|UNITED STATES|\bU\.S\.|\bUS\b/.test(g)) return "🇺🇸";
  if (
    /SAN FRANCISCO|NEW YORK|SEATTLE|FORT LAUDERDALE|SAN DIEGO|SAN JOSE|PALO ALTO|BOSTON|AUSTIN|CHICAGO|MIAMI|DENVER|ATLANTA/.test(
      g
    )
  )
    return "🇺🇸";
  if (/\bCA\b|\bNY\b|\bWA\b|\bFL\b|\bTX\b|\bMA\b|\bIL\b|\bCO\b|\bGA\b/.test(g)) return "🇺🇸";
  if (/UNITED KINGDOM|\bUK\b|LONDON|ENGLAND|SCOTLAND|BRITAIN|LANCASTER|MANCHESTER/.test(g))
    return "🇬🇧";
  if (/GERMANY|BERLIN|MUNICH|HAMBURG/.test(g)) return "🇩🇪";
  if (/FRANCE|PARIS/.test(g)) return "🇫🇷";
  if (/SPAIN|MADRID|BARCELONA/.test(g)) return "🇪🇸";
  if (/NETHERLANDS|AMSTERDAM/.test(g)) return "🇳🇱";
  if (/SWEDEN|STOCKHOLM/.test(g)) return "🇸🇪";
  if (/DENMARK|COPENHAGEN/.test(g)) return "🇩🇰";
  if (/NORWAY|OSLO|FINLAND|HELSINKI/.test(g)) return "🇸🇪";
  if (/IRELAND|DUBLIN/.test(g)) return "🇮🇪";
  if (/SWITZERLAND|ZURICH|GENEVA/.test(g)) return "🇨🇭";
  if (/AUSTRIA|VIENNA|BELGIUM|BRUSSELS/.test(g)) return "🇧🇪";
  if (/CZECH|PRAGUE|POLAND|WARSAW|PORTUGAL|LISBON|ITALY|MILAN|ROME/.test(g)) return "🇮🇹";
  if (/INDIA|BANGALORE|BENGALURU|MUMBAI|DELHI/.test(g)) return "🇮🇳";
  if (/SINGAPORE|HONG KONG|JAPAN|TOKYO|CHINA|BEIJING|SHANGHAI|SHENZHEN|KOREA|SEOUL/.test(g))
    return "🇸🇬";
  if (/SAUDI ARABIA|RIYADH|UAE|DUBAI|ABU DHABI/.test(g)) return "🇸🇦";
  if (/ISRAEL|TEL AVIV/.test(g)) return "🇮🇱";
  if (/GLOBAL/.test(g)) return "🌐";
  return "";
}

export function flagFor(geoStr: string | null | undefined): string {
  if (!geoStr) return "";
  if (/^\s*unknown\s*$/i.test(geoStr)) return "🌐";
  const parts = String(geoStr).split("/").map((p) => p.trim()).filter(Boolean);
  const flags: string[] = [];
  for (const part of parts) {
    const f = singleFlag(part);
    if (f && !flags.includes(f)) flags.push(f);
    if (flags.length >= 2) break;
  }
  return flags.length ? flags.join("") : "🌐";
}

export type Region = "us" | "europe" | "asia";

function singleRegion(s: string): Region | null {
  const g = (s || "").toUpperCase();
  if (/EUROPE\b|EUROPEAN|\bEU\b/.test(g)) return "europe";
  if (/UNITED KINGDOM|\bUK\b|LONDON|ENGLAND|SCOTLAND|BRITAIN|LANCASTER|MANCHESTER/.test(g))
    return "europe";
  if (/GERMANY|BERLIN|MUNICH|HAMBURG/.test(g)) return "europe";
  if (/FRANCE|PARIS/.test(g)) return "europe";
  if (/SPAIN|MADRID|BARCELONA/.test(g)) return "europe";
  if (/NETHERLANDS|AMSTERDAM/.test(g)) return "europe";
  if (/SWEDEN|STOCKHOLM/.test(g)) return "europe";
  if (/DENMARK|COPENHAGEN|NORWAY|OSLO|FINLAND|HELSINKI/.test(g)) return "europe";
  if (/IRELAND|DUBLIN|SWITZERLAND|ZURICH|GENEVA/.test(g)) return "europe";
  if (/AUSTRIA|VIENNA|BELGIUM|BRUSSELS/.test(g)) return "europe";
  if (/CZECH|PRAGUE|POLAND|WARSAW|PORTUGAL|LISBON|ITALY|MILAN|ROME/.test(g)) return "europe";
  if (/\bUSA\b|UNITED STATES|\bU\.S\.|\bUS\b/.test(g)) return "us";
  if (
    /SAN FRANCISCO|NEW YORK|SEATTLE|FORT LAUDERDALE|SAN DIEGO|SAN JOSE|PALO ALTO|BOSTON|AUSTIN|CHICAGO|MIAMI|DENVER|ATLANTA/.test(
      g
    )
  )
    return "us";
  if (/\bCA\b|\bNY\b|\bWA\b|\bFL\b|\bTX\b|\bMA\b|\bIL\b|\bCO\b|\bGA\b/.test(g)) return "us";
  if (/INDIA|BANGALORE|BENGALURU|MUMBAI|DELHI/.test(g)) return "asia";
  if (/SINGAPORE|HONG KONG|JAPAN|TOKYO|CHINA|BEIJING|SHANGHAI|SHENZHEN|KOREA|SEOUL/.test(g))
    return "asia";
  if (/SAUDI ARABIA|RIYADH|UAE|DUBAI|ABU DHABI/.test(g)) return "asia";
  if (/ISRAEL|TEL AVIV/.test(g)) return "asia";
  return null;
}

export function regionsFor(geoStr: string | null | undefined): Region[] {
  if (!geoStr) return [];
  const parts = String(geoStr).split("/").map((p) => p.trim()).filter(Boolean);
  const out = new Set<Region>();
  for (const p of parts) {
    const r = singleRegion(p);
    if (r) out.add(r);
  }
  return [...out];
}
