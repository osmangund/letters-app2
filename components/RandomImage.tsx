"use client"
import Image from "next/image"
import { useEffect, useState } from "react"

function RandomImage() {
  const [imageSrc, setImageSrc] = useState("")

  useEffect(() => {
    async function fetchRandomImage() {
      try {
        const response = await fetch("/api/images")
        if (!response.ok) {
          throw new Error("Network response was not ok")
        }
        const images = await response.json()
        const randomIndex = Math.floor(Math.random() * images.length)
        const randomImage = images[randomIndex]
        setImageSrc(`/images/${randomImage}`)
      } catch (error) {
        console.error("There was a problem with the fetch operation:", error)
      }
    }

    fetchRandomImage()
  }, [])

  return (
    <div>
      <Image src={imageSrc} alt="Random" />
    </div>
  )
}

export default RandomImage
