import { NextResponse, type NextRequest } from "next/server";
import { verify, SESSION_COOKIE } from "@/lib/auth";

/**
 * Gates every page and API route except:
 *  - /login (the password form)
 *  - /api/login (the password submission)
 *  - /api/cron/* (Vercel Cron auth via CRON_SECRET header)
 *  - Static assets
 *
 * Unauthenticated requests to pages → redirect to /login.
 * Unauthenticated requests to /api/* → 401 JSON.
 */
export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Public routes
  if (
    pathname === "/login" ||
    pathname.startsWith("/api/login") ||
    pathname.startsWith("/_next") ||
    pathname.startsWith("/favicon") ||
    pathname.startsWith("/icon")
  ) {
    return NextResponse.next();
  }

  // Cron: auth via Vercel-provided header instead of session cookie
  if (pathname.startsWith("/api/cron")) {
    const cronSecret = process.env.CRON_SECRET;
    const authHeader = req.headers.get("authorization");
    if (cronSecret && authHeader === `Bearer ${cronSecret}`) {
      return NextResponse.next();
    }
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const token = req.cookies.get(SESSION_COOKIE.name)?.value;
  const ok = await verify(token);
  if (ok) return NextResponse.next();

  // API → JSON 401
  if (pathname.startsWith("/api/")) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  // Page → redirect to login, preserving the intended destination
  const url = req.nextUrl.clone();
  url.pathname = "/login";
  url.searchParams.set("next", pathname);
  return NextResponse.redirect(url);
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     *  - _next/static (static files)
     *  - _next/image (image optimisation)
     *  - favicon
     *  - any file with an extension (likely a static asset)
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\..*).*)",
  ],
};
