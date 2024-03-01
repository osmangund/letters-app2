import EditLetterForm from "@/components/EditLetterForm"
import connectMongoDB from "@/libs/mongodb"

export const generateStaticParams = async () => {
  return {
    paths: [],
    fallback: true,
  }
}

export default function EditLetter() {
  return <EditLetterForm />
}
