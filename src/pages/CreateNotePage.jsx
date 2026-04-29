import NoteForm from "../components/NoteForm"
import axios from "axios"
import { toast } from 'react-toastify'
import { useNavigate } from "react-router-dom"

const apiURL = import.meta.env.VITE_API_URL

const CreateNotePage = () => {
  const navigate = useNavigate();

  const handleCreate = async (note) => {
    try {
      await axios.post(`${apiURL}/api/notes`, note)
      .then(res => {
        if (res.status !== 201)
          throw new Error("Error al crear una nota")

        toast.success("¡Nota creada con éxito!", {
          position: "bottom-center",
          autoClose: 3000,
          theme: "dark",
        })
        navigate("/")
      })
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className="min-h-screen bg-slate-950 p-8">
      <NoteForm onSubmit={handleCreate} initialData={{title: "", content: ""}} />
    </div>
  )
}

export default CreateNotePage
