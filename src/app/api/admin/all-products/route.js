import connectToDB from "@/database";
import Product from "@/models/product";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(req) {
  try {
    await connectToDB();

    const allProducts = await Product.find({});

    if (allProducts.length >= 0) {
      return NextResponse.json({
        success: true,
        data: allProducts,
      });
    } else {
      return NextResponse.json({
        success: false,
        status: 404,
        message: "No Products found",
      });
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      success: false,
      message: "Something went wrong! Please try again later.",
    });
  }
}

