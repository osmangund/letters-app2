import connectMongoDB from "@/libs/mongodb"
import Letter from "@/models/letter"
import { NextResponse } from "next/server"

export async function PUT(req, { params }) {
  const { id } = params
  const { newTitle: title, newDescription: description } = await req.json()

  await connectMongoDB()
  await Letter.findByIdAndUpdate(id, { title, description })
  return NextResponse.json({ message: "Topic updated" }, { status: 200 })
}
export async function GET(req, { params }) {
  const { id } = params

  await connectMongoDB()
  const topic = await Letter.findById(id)
  return NextResponse.json({ topic }, { status: 200 })
}
