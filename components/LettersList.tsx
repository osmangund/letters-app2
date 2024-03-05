import RemoveBtn from "./RemoveBtn"
import Link from "next/link"
import { HiPencilAlt } from "react-icons/hi"

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
    console.error("Error loading letters: ", err)
  }
}

const Letter = ({
  title,
  description,
  _id,
}: {
  title: string
  description: string
  _id: string
}) => {
  return (
    <div className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start">
      <div>
        <h2 className="font-bold text-3xl">{title}</h2>
        <div>{description}</div>
      </div>
      <div className="flex gap-2">
        <RemoveBtn id={_id} />
        <Link href={`/editLetter/${_id}`}>
          <HiPencilAlt size={24} />
        </Link>
      </div>
    </div>
  )
}

export default async function LettersList() {
  const { letters } = await getLetters()

  return (
    <>
      {letters?.map((letter: any) => {
        return (
          <Letter
            key={letter._id}
            title={letter.title}
            description={letter.description}
            _id={letter._id}
          />
        )
      })}
    </>
  )
}
