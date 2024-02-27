export default function EditLetterForm() {
  return (
    <form className="flex flex-col gap-3">
      <input
        type="text"
        placeholder="Letter title..."
        className="border border-slate-500 px-8 py-2"
      />
      <input
        type="text"
        placeholder="Letter description..."
        className="border border-slate-500 px-8 py-2"
      />
      <button className="bg-green-600 font-bold text-white py-3 px-6 w-fit">
        Update Letter
      </button>
    </form>
  )
}
