import { NextRequest, NextResponse } from "next/server";
import { ADMIN_SESSION_COOKIE, expectedSessionToken } from "@/lib/adminAuth";

const ADMIN_BASE = "/admin";
const LOGIN_PATH = `${ADMIN_BASE}/login`;

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname === LOGIN_PATH) {
    return NextResponse.next();
  }

  const cookie = request.cookies.get(ADMIN_SESSION_COOKIE)?.value;
  const expected = await expectedSessionToken();

  if (cookie && expected && cookie === expected) {
    return NextResponse.next();
  }

  const loginUrl = new URL(LOGIN_PATH, request.url);
  loginUrl.searchParams.set("next", pathname);
  return NextResponse.redirect(loginUrl);
}

export const config = {
  matcher: ["/admin/:path*"],
};
