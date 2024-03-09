"use client"
import { handleSuccess } from "@/components/handleSuccess"
import { fetchLettersPath } from "@/utils/letters"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function AddLetter() {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [letter, setLetter] = useState("")
  const router = useRouter()

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    try {
      const res = await fetch(fetchLettersPath, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, letter, description }),
      })

      if (!res.ok) return console.log("Error adding letter on addLetter/page")

      if (res.ok) {
        handleSuccess(router, "Added letter successfully")
        router.push("/")
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
        placeholder="Title..."
        className="border border-slate-500 px-4 py-2 text-start justify-start"
        required
      />
      <input
        onChange={(e) => setDescription(e.target.value)}
        type="text"
        value={description}
        placeholder="Description..."
        className="border border-slate-500 px-4 py-2 text-start justify-start"
        required
      />
      <textarea
        onChange={(e) => setLetter(e.target.value)}
        value={letter}
        placeholder="Letter... (markdown supported)"
        className="border border-slate-500 px-4 py-2 h-48 text-start justify-start"
        required
      />
      <label htmlFor="image">Add image</label>
      <button className="bg-green-600 font-bold text-white py-3 px-6 w-fit">
        Add Letter
      </button>
    </form>
  )
}
