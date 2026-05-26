import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.redirect("https://www.youtube.com/watch?v=SR28SOkzEp4", {
    headers: {
      "Cache-Control": "no-store, max-age=0",
    },
  });
}
