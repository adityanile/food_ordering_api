import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { userId } = await req.json();

  var item = await prisma.cart.create({
    data: {
      userId: userId,
    },
  });

  if (item) return NextResponse.json({ status: "Success", item: item });
  else return NextResponse.json({ status: "fail" });
}
