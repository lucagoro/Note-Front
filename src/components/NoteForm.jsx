import { useEffect, useState } from "react"

const NoteForm = ({ onSubmit, initialData = { title: "", content: "" } }) => {
    const [note, setNotes] = useState(initialData)

    useEffect(() => {
        if (initialData)
            setNotes(initialData)
    }, [initialData])

    const handleChange = (e) => {
        setNotes({
            ...note,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        onSubmit(note)
    }
  return (
    <form onSubmit={handleSubmit} className="bg-slate-900 rounded-lg max-w-4xl mx-auto p-10">
      <input className="bg-slate-950 block w-full mb-8 input lg:input-lg border-0 focus:outline-accent" type="text" placeholder="Titulo" id="title" name="title" value={note.title || ""} onChange={handleChange} required />
      <textarea className="bg-slate-950 input lg:input-lg resize-y w-full mb-8 textarea focus:outline-accent border-0" required name="content" id="content" placeholder="Contenido" value={note.content || ""} onChange={handleChange}></textarea>
      <button className="btn btn-soft btn-primary">Guardar</button>
    </form>
  )
}

export default NoteForm
