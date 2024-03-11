"use client"

import Link from "next/link"
import RemoveAllBtn from "./RemoveAllBtn"
import { usePathname } from "next/navigation"
import Button from "./Button"

const LettersAppLink = () => {
  return (
    <Link href={"/"} className="text-white font-bold">
      Letters App
    </Link>
  )
}

const Nav = ({ children }: any) => {
  return (
    <nav className="flex justify-between items-center px-8 py-3 bg-black text-white">
      {children}
    </nav>
  )
}

const ReadLetterNav = ({ children }: any) => {
  return (
    <nav className="flex justify-between max-w-3xl mx-auto items-center px-8 py-3 bg-letterBg text-letterText">
      {children}
    </nav>
  )
}

const lettersPageNav = () => {
  return (
    <Nav>
      <LettersAppLink />
      <div className="flex gap-2">
        <Button>
          <Link href={"/addLetter"}>Add Letter</Link>
        </Button>
        <RemoveAllBtn />
      </div>
    </Nav>
  )
}

const addLetterNav = () => {
  return (
    <Nav>
      <LettersAppLink />
      <Button>
        <Link href={"/"}>Back</Link>
      </Button>
    </Nav>
  )
}

const editLetterNav = (id: string) => {
  return (
    <Nav>
      <LettersAppLink />
      <Button>
        <Link href={`/letters/${id}`}>Back to Letter</Link>
      </Button>
    </Nav>
  )
}

const readLetterNav = (id: string) => {
  return (
    <ReadLetterNav>
      <LettersAppLink />
      <Button>
        <Link href={`/editLetter/${id}`}>Edit</Link>
      </Button>
    </ReadLetterNav>
  )
}

export default function Navbar() {
  const pathname = usePathname()
  const id = pathname.split("/")[2]

  if (pathname === "/letters" || pathname === "/") return lettersPageNav()
  if (pathname === "/addLetter") return addLetterNav()
  if (pathname.match(/\/editLetter+/)) return editLetterNav(id)
  if (pathname.match(/\/letters\/+/)) return readLetterNav(id)
}
