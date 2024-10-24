import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { name, email, message } = await req.json();

  var item = await prisma.contactResponse.create({
    data: {
      name: name,
      email: email,
      message: message,
    },
  });
  if (item) return NextResponse.json({ status: "Success", item: item });
  else return NextResponse.json({ status: "fail" });
}
