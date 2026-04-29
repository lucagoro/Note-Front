import { useEffect, useState } from "react"
import CardNote from "../components/CardNote"
import axios from "axios"
import formatData from "../utils/formatDate"

const apiURL = import.meta.env.VITE_API_URL

const HomePage = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const fetchData = async() => {
      try {
        const response = await axios.get(`${apiURL}/api/notes`) // response es un objeto que tiene la data q se trae
        console.log(response)
        setNotes(response.data)

      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 w-full">
      <div className="max-w-[1200px] mx-auto p-8">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-4 mt-16">
          {notes.map(note => (
            <CardNote
              key={note._id}
              title={note.title}
              content={note.content}
              id={note._id}
              date={formatData(note.createdAt)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default HomePage
