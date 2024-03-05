import connectMongoDB from "@/libs/mongodb"
import Letter from "@/models/letter"
import { NextResponse } from "next/server"

export async function POST(req) {
  console.log(req)
  const { title, description } = await req.json()
  console.log(title, description)
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
  console.log(req.params)
  await connectMongoDB()
  await Letter.findByIdAndDelete(id)
  return NextResponse.json({ message: "Letter deleted", status: 200 })
}

export const dynamic = "force-static"
