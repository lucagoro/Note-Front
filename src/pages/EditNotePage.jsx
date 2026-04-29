import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"; // Importamos useParams
import axios from "axios";
import NoteForm from "../components/NoteForm";
import { toast } from "react-toastify"; // Asegúrate de tenerlo instalado

const apiURL = import.meta.env.VITE_API_URL;

const EditNotePage = () => {
  const navigate = useNavigate();
  const { id } = useParams(); // Obtenemos el ID de la nota desde la URL (/editNote/:id)
  const [noteToEdit, setNoteToEdit] = useState(null);
  const [loading, setLoading] = useState(true);

  // 1. Cargar la nota existente al entrar a la página
  useEffect(() => {
    const fetchNote = async () => {
      try {
        const res = await axios.get(`${apiURL}/api/notes/${id}`)
        setNoteToEdit(res.data)
      } catch (error) {
        console.log(error)
        navigate("/");
      } finally {
        setLoading(false);
      }
    };
    fetchNote();
  }, [id, navigate]);

  // 2. Función para guardar los cambios
  const handleEdit = async (updatedNote) => {
    try {
      // Usamos el ID de la URL para la petición
      const res = await axios.put(`${apiURL}/api/notes/${id}`, updatedNote);
      
      if (res.status === 200) {
        toast.success("SYSTEM UPDATE: Quest modified successfully", {
          position: "bottom-right",
          theme: "dark", // Estilo oscuro para que combine
        });
        navigate("/");
      }
    } catch (error) {
      console.error(error);
      toast.error("CRITICAL ERROR: Update failed");
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <div className="text-cyan-400 font-mono animate-pulse tracking-[5px]">
          Cargando...
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 p-8">
      <div className="max-w-[1200px] mx-auto">
        <NoteForm onSubmit={handleEdit} initialData={noteToEdit} />
      </div>
    </div>
  );
};

export default EditNotePage;