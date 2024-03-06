import Link from "next/link"
import RemoveBtn from "./RemoveBtn"
import { HiPencilAlt } from "react-icons/hi"

export const Letter = ({
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
