export const fetchLettersPath = `${process.env.NEXT_PUBLIC_URL}/api/letters`

export const getLetters = async () => {
  try {
    const res = await fetch(fetchLettersPath, {
      cache: "no-store",
    })
    const data = await res.json()

    if (!res.ok) {
      throw new Error(data.message)
    }
    return data
  } catch (err) {
    console.error("Error loading letters on /editLetter/[id]: ", err)
    return { letters: [] }
  }
}

export const getLetterById = async (id) => {
  try {
    const res = await fetch(`${fetchLettersPath}/${id}`, {
      method: "GET",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
    })
    if (!res.ok) throw new Error("Error editing letter on editLetter/[id]/page")
    return res.json()
  } catch (err) {
    console.log("Error editing letter: ", err)
  }
}
