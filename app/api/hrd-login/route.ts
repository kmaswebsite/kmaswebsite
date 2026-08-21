import { NextRequest, NextResponse } from "next/server";
import { ADMIN_SESSION_COOKIE, isValidCredentials, computeSessionToken } from "@/lib/adminAuth";

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => null);
  const username = typeof body?.username === "string" ? body.username : "";
  const password = typeof body?.password === "string" ? body.password : "";

  if (!(await isValidCredentials(username, password))) {
    return NextResponse.json({ error: "Invalid username or password." }, { status: 401 });
  }

  const token = await computeSessionToken(username, password);
  const response = NextResponse.json({ ok: true });
  response.cookies.set(ADMIN_SESSION_COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });
  return response;
}
