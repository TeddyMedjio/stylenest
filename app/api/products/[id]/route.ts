import arrivals from "@/constants/arrivals.json";
import { NextResponse } from "next/server";

const products: any = arrivals;

export async function GET(request: Request, context: any) {
  const { params } = context;
  return NextResponse.json({
    product: products.find((x: any) => x.id.toString() === params.id),
  });
}
