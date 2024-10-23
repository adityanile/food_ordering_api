import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  var usr = await prisma.user.findMany({});

  return NextResponse.json({ msg: usr });
}
