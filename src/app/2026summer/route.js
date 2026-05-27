import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.redirect("https://youtu.be/kBAXIzPlHDQ", {
    headers: {
      "Cache-Control": "no-store, max-age=0",
    },
  });
}
