import connectMongoDB from "@/libs/mongodb"
import Letter from "@/models/letter"
import { NextResponse } from "next/server"

export async function POST(req) {
  const { title, description } = await req.json()
  await connectMongoDB()
  await Letter.create({ title, description })
  return NextResponse.json({ message: "Letter created", status: 201 })
}

export async function GET() {
  await connectMongoDB()
  const letters = await Letter.find()
  return NextResponse.json({ letters })
}

export async function DELETE(req) {
  const id = await req.nextUrl.searchParams.get("id")
  await connectMongoDB()
  await Letter.findByIdAndDelete(id)
  return NextResponse.json({ message: "Letter deleted", status: 200 })
}
// export const dynamic = "force-static"

