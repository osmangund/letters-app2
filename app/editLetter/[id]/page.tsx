import EditLetterForm from "@/components/EditLetterForm"
import { fetchLettersPath, getLetterById, getLetters } from "@/utils/letters"

// export const generateStaticParams = async () => {
//   const { letters } = await getLetters()

//   return letters?.map((letter: any) => ({
//     id: letter._id,
//   }))
// }



export default async function EditLetter({ params: { id } }: any) {
  const {
    letter: { title, description, letter },
  } = await getLetterById(id)
  return (
    <EditLetterForm
      id={id}
      title={title}
      description={description}
      letter={letter}
    />
  )
}
