"use client"

import Link from "next/link"
import RemoveAllBtn from "./RemoveAllBtn"
import { usePathname } from "next/navigation"

const LettersAppLink = () => {
  return (
    <Link href={"/"} className="text-white font-bold">
      Letters App
    </Link>
  )
}

const Nav = ({ children }: any) => {
  return (
    <nav className="flex justify-between items-center bg-slate-800 px-8 py-3">
      {children}
    </nav>
  )
}

const lettersPageNav = () => {
  return (
    <Nav>
      <LettersAppLink />
      <div className="flex gap-2">
        <Link href={"/addLetter"} className="bg-white p-2">
          Add Letter
        </Link>
        <RemoveAllBtn />
      </div>
    </Nav>
  )
}

const addLetterNav = () => {
  return (
    <Nav>
      <LettersAppLink />
      <div className="flex gap-2">
        <Link href={"/"} className="bg-white p-2">
          Back
        </Link>
      </div>
    </Nav>
  )
}

const editLetterNav = (id: string) => {
  return (
    <Nav>
      <LettersAppLink />
      <div className="flex gap-2">
        <Link href={`/letters/${id}`} className="bg-white p-2">
          Back to Letter
        </Link>
      </div>
    </Nav>
  )
}

const readLetterNav = (id: string) => {
  return (
    <Nav>
      <LettersAppLink />
      <Link href={`/editLetter/${id}`} className="bg-white p-2">
        Edit
      </Link>
    </Nav>
  )
}

export default function Navbar() {
  const pathname = usePathname()
  console.log(pathname)
  const id = pathname.split("/")[2]

  if (pathname === "/letters" || pathname === "/") return lettersPageNav()
  if (pathname === "/addLetter") return addLetterNav()
  if (pathname.match(/\/editLetter+/)) return editLetterNav(id)
  if (pathname.match(/\/letters\/+/)) return readLetterNav(id)
}
