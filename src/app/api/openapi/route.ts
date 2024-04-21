import { openApiDocument } from "@/server/api/openapi";
import { NextRequest, NextResponse } from "next/server";

export async function GET(_req: NextRequest) {
  return NextResponse.json(openApiDocument);
}
