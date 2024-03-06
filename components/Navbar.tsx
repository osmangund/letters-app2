import Link from "next/link"
import RemoveAllBtn from "./RemoveAllBtn"

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center bg-slate-800 px-8 py-3">
      <Link href={"/"} className="text-white font-bold">
        Letters App
      </Link>
      <div className="flex gap-2">
        <Link href={"/addLetter"} className="bg-white p-2">
          Add Letter
        </Link>
        {/* <RemoveAllBtn /> */}
      </div>
    </nav>
  )
}
