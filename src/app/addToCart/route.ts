import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { itemId, cartId, userId } = await req.json();

  const cart = await prisma.cart.update({
    where: {
      id: cartId,
    },
    data: {
      items: {
        connect: {
          id: itemId,
        },
      },
      userId: userId,
    },
    include: {
      items: true,
    },
  });

  if (cart) return NextResponse.json({ status: "Success", msg: cart });
  else return NextResponse.json({ status: "fail", msg: cart });
}
