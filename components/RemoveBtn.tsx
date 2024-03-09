"use client"
import { HiOutlineTrash } from "react-icons/hi"
import { useRouter } from "next/navigation"
import { handleSuccess } from "./handleSuccess"
import { fetchLettersPath } from "@/utils/letters"

export default function RemoveBtn({ id }: { id: string }) {
  const router = useRouter()
  const removeLetter = async () => {
    const confirmed = confirm("Are you sure you want to delete this letter?")

    if (confirmed) {
      const res = await fetch(
        `${fetchLettersPath}?id=${id}`,
        {
          method: "DELETE",
        }
      )

      if (!res.ok) return console.error("Error deleting letter on RemoveBtn")
      if (res.ok) return handleSuccess(router, "Letter deleted")
    }
  }
  return (
    <button className="text-red-400" onClick={removeLetter}>
      <HiOutlineTrash size={24} />
    </button>
  )
}
