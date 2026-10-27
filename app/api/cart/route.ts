
import { NextResponse } from "next/server";
import { getCart, saveCart }  from "../../data/cart";
import type { CartItem } from  "../../data/cart";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const items = await getCart();

    return NextResponse.json(
      { items },
      { headers: { "Cache-Control": "no-store" } }
    );
  } catch {
    return NextResponse.json(
      { error: "Unable to load cart." },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const product = await request.json();

    if (
      !Number.isInteger(product.id) ||
      typeof product.title !== "string" ||
      typeof product.image !== "string" ||
      typeof product.price !== "number" ||
      !Number.isFinite(product.price) ||
      product.price < 0
    ) {
      return NextResponse.json(
        { error: "Invalid product data." },
        { status: 400 }
      );
    }

    const items = await getCart();
    const existing = items.find(
      (item) => item.id === product.id
    );

    if (existing) {
      existing.quantity += 1;
    } else {
      items.push({
        id: product.id,
        title: product.title,
        image: product.image,
        price: product.price,
        quantity: 1,
      });
    }

    await saveCart(items);

    return NextResponse.json({ items });
  } catch {
    return NextResponse.json(
      { error: "Unable to add product to cart." },
      { status: 500 }
    );
  }
}

export async function DELETE(request: Request) {
  try {
    const body = await request.json();
    const id = body.id;

    if (!Number.isInteger(id)) {
      return NextResponse.json(
        { error: "Invalid product ID." },
        { status: 400 }
      );
    }

    const items: CartItem[] = await getCart();
    const updatedItems = items.filter(
      (item) => item.id !== id
    );

    await saveCart(updatedItems);

    return NextResponse.json(
      { items: updatedItems },
      { headers: { "Cache-Control": "no-store" } }
    );
  } catch {
    return NextResponse.json(
      { error: "Unable to remove product from cart." },
      { status: 500 }
    );
  }
}
