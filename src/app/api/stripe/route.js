import AuthUser from "@/middleware/AuthUser";
import { NextResponse } from "next/server";
import dotenv from 'dotenv';
dotenv.config();

const stripe = require("stripe")(
  "sk_test_51NgZ70BaRB0RsOJyvwaRxpD12iWTszenhOXL9nDqsD4SG1hVugbkABOLkPqx8cvr4C1rFrn4kb5S7JunW0VArAGP00QxH2LJR2"
);
const apiurl = process.env.API_URL;
export const dynamic = "force-dynamic";

export async function POST(req) {
  try {
    const isAuthUser = await AuthUser(req);
    if (isAuthUser) {
      const res = await req.json();

      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items: res,
        mode: "payment",
        success_url: `${apiurl}/checkout` + "?status=success",
        cancel_url: `${apiurl}/checkout` + "?status=cancel",
      });

      return NextResponse.json({
        success: true,
        id: session.id,
      });
    } else {
      return NextResponse.json({
        success: true,
        message: "You are not authenticated",
      });
    }
  } catch (e) {
    console.log(e);
    return NextResponse.json({
      status: 500,
      success: false,
      message: "Something went wrong ! Please try again",
    });
  }
}
