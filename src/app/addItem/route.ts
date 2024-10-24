import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { itemName, itemDesc, itemPrice } = await req.json();

  var item = await prisma.item.create({
    data: {
      itemName: itemName,
      itemDesc: itemDesc,
      itemPrice: itemPrice,
    },
  });

  if (item) return NextResponse.json({ status: "Success", item: item });
  else return NextResponse.json({ status: "fail" });
}
