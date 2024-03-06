import { Letter } from "./Letter"

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
  } catch (err) {
    console.error("Error loading letters: ", err)
    return { letters: [] }
  }
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
