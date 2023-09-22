import type { NextApiRequest, NextApiResponse } from 'next'
import { NextResponse } from 'next/server';
const fs = require('fs');
const pdf = require('pdf-parse');

async function someAsyncOperation(){
//   console.log("reached here")
//   let dataBuffer = await fs.readFileSync("/resume_aakash.pdf");
//   const data = await pdf("dataBuffer")
  return "data.text"
}


export async function POST(req: NextApiRequest, res: NextApiResponse) {
  try {
    const result = await someAsyncOperation()
    return NextResponse.json(
        { message:{ result } },
        { status: 200 }
      );
  } catch (err) {
    return NextResponse.json(
        { message:{ ERROR: "ERROR" } },
        { status: 500 }
      );
  }
}


export async function GET(req: NextApiRequest, res: NextApiResponse) {
    try {
      const result = await someAsyncOperation()
      return NextResponse.json(
          { message:{ result } },
          { status: 200 }
        );
    } catch (err) {
      return NextResponse.json(
          { message:{ ERROR: "ERROR" } },
          { status: 500 }
        );
    }
  }