
import "server-only";
import { promises as fs } from "node:fs";
import path from "node:path";

export type CartItem = {
  id: number;
  title: string;
  image: string;
  price: number;
  quantity: number;
};

const filePath = path.join(process.cwd(), "data", "cart.json");

export async function getCart(): Promise<CartItem[]> {
  try {
    const data = await fs.readFile(filePath, "utf8");
    return JSON.parse(data) as CartItem[];
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") {
      return [];
    }
    throw error;
  }
}

export async function saveCart(items: CartItem[]): Promise<void> {
  await fs.mkdir(path.dirname(filePath), { recursive: true });
  await fs.writeFile(filePath, JSON.stringify(items, null, 2), "utf8");
}
