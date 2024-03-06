import EditLetterForm from "@/components/EditLetterForm"

const getLetters = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/letters`, {
      cache: "no-store",
    })
    const data = await res.json()

    if (!res.ok) {
      throw new Error(data.message)
    }
    return data
  } catch (err: any) {
    console.error("Error loading letters on /editLetter/[id]: ", err)
  }
}

export const generateStaticParams = async () => {
  const { letters } = await getLetters()

  return letters?.map((letter: any) => ({
    id: letter._id,
  }))
}

export default function EditLetter() {
  return <EditLetterForm />
}
