import Image from "next/image"

const imageCount = 6

function getRandomInt(max: number) {
  console.log(Math.floor(Math.random() * max))
  return Math.floor(Math.random() * max + 1)
}

export default function RandomImageBasic() {
  const randomIndex = getRandomInt(imageCount)
  return (
    <Image
      src={`/images/img${randomIndex}.jpg`}
      fill={true}
      alt="A sophisticated image"
      aria-hidden
    />
  )
}
