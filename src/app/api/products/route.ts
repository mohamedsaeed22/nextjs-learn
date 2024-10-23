import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = await fetch(`https://dummyjson.com/products`);

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
