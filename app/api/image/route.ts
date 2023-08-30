import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import OpenAI from "openai";

import { increaseApiLimit, checkApiLimit } from "@/lib/api-limit";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const body = await req.json();
    const { prompt, amount = "1", resolution = "512x512" } = body;

    if (!userId) return new NextResponse("Unautorized", { status: 401 });

    if (!openai.apiKey)
      return new NextResponse("Open API Key is not configured", {
        status: 500,
      });

    if (!prompt)
      return new NextResponse("Prompt are required", { status: 400 });

    if (!amount)
      return new NextResponse("Amount are required", { status: 400 });

    if (!resolution)
      return new NextResponse("Resolution are required", { status: 400 });

    const freeTrail = await checkApiLimit();

    if (!freeTrail) {
      return new NextResponse("Free trial has expired", { status: 403 });
    }

    const response = await openai.images.generate({
      prompt,
      n: parseInt(amount, 10),
      size: resolution,
    });

    await increaseApiLimit();
    return NextResponse.json(response.data);
  } catch (err) {
    console.log("[IMAGE_ERROR]", err);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
