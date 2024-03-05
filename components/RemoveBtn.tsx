"use client"
import { HiOutlineTrash } from "react-icons/hi"
import toast from "react-hot-toast"
import { useRouter } from "next/navigation"

function handleSuccess(router: any) {
  toast.success("Letter deleted successfully!")
  setTimeout(() => {
    router.refresh()
  }, 1000)
}

export default function RemoveBtn({ id }: { id: string }) {
  const router = useRouter()
  const removeLetter = async () => {
    const confirmed = confirm("Are you sure you want to delete this letter?")

    if (confirmed) {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_URL}/api/letters?id=${id}`,
        {
          method: "DELETE",
        }
      )

      if (!res.ok) return console.error("Error deleting letter")
      if (res.ok) return handleSuccess(router)
    }
  }
  return (
    <button className="text-red-400" onClick={removeLetter}>
      <HiOutlineTrash size={24} />
    </button>
  )
}
