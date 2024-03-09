"use client"
import { fetchLettersPath } from "@/utils/letters"
import { handleSuccess } from "./handleSuccess"
import { useRouter } from "next/navigation"

export default function RemoveAllBtn() {
  const router = useRouter()

  async function removeLetters() {
    const confirmed = confirm("Are you sure you want to delete all letters?")

    if (confirmed) {
      const res = await fetch(fetchLettersPath, {
        method: "DELETE",
      })
      if (!res.ok) return console.error("Error deleting letter on RemoveAllBtn")
      if (res.ok) return handleSuccess(router)
    }
  }

  return (
    <>
      <button className="bg-white p-2" onClick={removeLetters}>
        Delete All Letters
      </button>
    </>
  )
}
