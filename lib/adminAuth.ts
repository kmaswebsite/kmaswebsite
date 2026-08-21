export const ADMIN_SESSION_COOKIE = "hrd_admin_session";

async function sha256Hex(input: string): Promise<string> {
  const data = new TextEncoder().encode(input);
  const digest = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(digest))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

export async function computeSessionToken(username: string, password: string): Promise<string> {
  return sha256Hex(`hrd-admin-session:${username}:${password}`);
}

export async function isValidCredentials(username: string, password: string): Promise<boolean> {
  return username === process.env.ADMIN_USERNAME && password === process.env.ADMIN_PASSWORD;
}

export async function expectedSessionToken(): Promise<string | null> {
  const username = process.env.ADMIN_USERNAME;
  const password = process.env.ADMIN_PASSWORD;
  if (!username || !password) return null;
  return computeSessionToken(username, password);
}
