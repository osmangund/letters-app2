"use client"

import { fetchLettersPath } from "@/utils/letters"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { handleSuccess } from "./handleSuccess"

type EditLetterFormProps = {
  id: string
  title: string
  description: string
  letter: string
}

export default function EditLetterForm({
  id,
  title,
  description,
  letter,
}: EditLetterFormProps) {
  const [newTitle, setNewTitle] = useState(title)
  const [newDescription, setNewDescription] = useState(description)
  const [newLetter, setNewLetter] = useState(letter)
  const router = useRouter()

  const handleSubmit = async (e: any) => {
    e.preventDefault()

    try {
      const res = await fetch(`${fetchLettersPath}/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: newTitle,
          description: newDescription,
          letter: newLetter,
        }),
      })

      if (!res.ok) throw new Error("Error updating letter")
      handleSuccess(router, "Updated letter successfully")
      router.push(`/letters/${id}`)
    } catch (err) {
      console.log("Error updating letter: ", err)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <input
        type="text"
        id="title"
        name="title"
        placeholder="Title..."
        value={newTitle}
        onChange={(e) => setNewTitle(e.target.value)}
        className="border border-slate-500 px-4 py-2 text-start justify-start"
      />
      <input
        type="text"
        id="description"
        name="description"
        placeholder="Description..."
        value={newDescription}
        onChange={(e) => setNewDescription(e.target.value)}
        className="border border-slate-500 px-4 py-2 text-start justify-start"
      />
      <textarea
        placeholder="Letter..."
        id="letter"
        name="letter"
        value={newLetter}
        onChange={(e) => setNewLetter(e.target.value)}
        className="border border-slate-500 px-4 py-2 h-48 text-start justify-start"
      />
      <button className="bg-green-600 font-bold text-white py-3 px-6 w-fit">
        Update Letter
      </button>
    </form>
  )
}
