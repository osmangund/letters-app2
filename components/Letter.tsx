import Markdown from "markdown-to-jsx"
export default function Letter({ letter }: any) {
  return (
    <article className="my-4">
      <h1 className="text-xl font-bold capitalize mb-4 mt-2">{letter.title}</h1>
      <Markdown>{letter.letter}</Markdown>
    </article>
  )
}
