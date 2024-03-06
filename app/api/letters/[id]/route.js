import connectMongoDB from "@/libs/mongodb"
import Letter from "@/models/letter"
import { NextResponse } from "next/server"

const getLetters = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/api/letters`,
      {
        cache: "no-store",
      }
    )
    const data = await res.json()

    if (!res.ok) {
      throw new Error(data.message)
    }
    return data
  } catch (err) {
    // console.error("Error loading letters: ", err)
    return { letters: [] }
  }
}

export const generateStaticParams = async () => {
  const { letters } = await getLetters()

  return letters?.map((letter) => ({
    id: letter._id,
  }))
}
export async function PUT(req, { params }) {
  const { id } = params
  const { newTitle: title, newDescription: description } = await req.json()
  await connectMongoDB()
  await Letter.findByIdAndUpdate(id, { title, description })
  return NextResponse.json({ message: "Letter updated" }, { status: 200 })
}
export async function GET(req, { params }) {
  const { id } = params

  await connectMongoDB()
  const letter = await Letter.findById(id)
  return NextResponse.json({ letter }, { status: 200 })
}
