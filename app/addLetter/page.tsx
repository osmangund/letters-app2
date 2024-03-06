"use client"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function AddLetter() {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")

  const router = useRouter()

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    const url = `${process.env.NEXT_PUBLIC_URL}/api/letters`
    try {
      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, description }),
      })

      if (!res.ok) return console.log("Error adding letter on addLetter/page: ", res)

      if (res.ok) {
        router.push("/")
        router.refresh()
      }
    } catch (err) {
      console.log("Error adding letter: ", err)
    }
  }

  return (
    <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
      <input
        onChange={(e) => setTitle(e.target.value)}
        type="text"
        value={title}
        placeholder="Letter title..."
        className="border border-slate-500 px-8 py-2"
        required
      />
      <input
        type="text"
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        placeholder="Letter description..."
        className="border border-slate-500 px-8 py-2"
        required
      />
      <button className="bg-green-600 font-bold text-white py-3 px-6 w-fit">
        Add Letter
      </button>
    </form>
  )
}
