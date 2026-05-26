import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.redirect("https://www.instagram.com/reel/DThRccgiSeR/?igsh=ZHEwdWhhbG1mNHk1", {
    headers: {
      "Cache-Control": "no-store, max-age=0",
    },
  });
}
