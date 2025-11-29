import { NextRequest, NextResponse } from "next/server"
import { generateMnemonic } from "@/lib/groq"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { topic } = body

    if (!topic || typeof topic !== "string") {
      return NextResponse.json(
        { error: "Topic is required" },
        { status: 400 }
      )
    }

    const result = await generateMnemonic(topic)
    return NextResponse.json(result)
  } catch (error) {
    console.error("Error generating mnemonic:", error)
    return NextResponse.json(
      { error: "Failed to generate mnemonic" },
      { status: 500 }
    )
  }
}
