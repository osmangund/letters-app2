import fs from "fs"
import path from "path"
const fetchImagesPath = `${process.env.NEXT_PUBLIC_URL}/api/images`

const getImages = async () => {
  try {
    const res = await fetch(fetchImagesPath, {
      cache: "no-store",
    })
    const data = await res.json()

    if (!res.ok) {
      throw new Error(data.message)
    }
    return data
  } catch (err) {
    console.error("Error getting letters: ", err)
    return { letters: [] }
  }
}

export default function handler(req, res) {
  console.log(process.cwd())
  const imagesFolderPath = path.join(process.cwd(), "/images")
  console.log(imagesFolderPath)
  fs.readdir(imagesFolderPath, (err, files) => {
    if (err) {
      res.status(500).json({ error: "Error reading images folder" })
    } else {
      res.status(200).json(files)
    }
  })
}
