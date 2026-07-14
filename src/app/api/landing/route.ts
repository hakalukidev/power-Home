import { NextResponse } from "next/server";
import { getLandingContent } from "@/lib/landing/content";

export async function GET() {
  return NextResponse.json(getLandingContent());
}
