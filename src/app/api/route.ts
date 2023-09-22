import { NextResponse } from "next/server";

// To handle a GET request to /api
export async function GET() {
  // Do whatever you want
  return NextResponse.json(
    { message: "This is the root path of api" },
    { status: 200 }
  );
}

// To handle a POST request to /api
export async function POST() {
  // Do whatever you want
  return NextResponse.json(
    { message: "This is the root path of api" },
    { status: 200 }
  );
}
