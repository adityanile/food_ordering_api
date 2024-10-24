import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  var items = await prisma.item.findMany({});
  return NextResponse.json({ status: "success", items: items });
}
