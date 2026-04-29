import { SquarePen, Trash } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import DeleteModal from './DeleteModal';

const apiURL = import.meta.env.VITE_API_URL;

const CardNote = ({ title, content, id, date }) => {
    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleEdit = () => {
        navigate(`/editNote/${id}`)
    }

    const handleConfirmDelete = async () => {
    try {
        const res = await axios.delete(`${apiURL}/api/notes/${id}`);
        
        // Verificamos si la respuesta es exitosa (status 200 al 299)
        if (res.status >= 200 && res.status < 300) {
            // 1. Cerramos el modal inmediatamente
            setIsModalOpen(false);
            
            // 2. Avisamos al usuario
            toast.error("QUEST TERMINATED", { 
                theme: "dark",
                position: "bottom-center" 
            });
            
            // 3. Quitamos la nota de la pantalla
            if (onDelete) onDelete(id); 
        }
    } catch (error) {
        console.error("Error en el sistema:", error);
        setIsModalOpen(false); 
    }
};
    
    return (
        <div className="card bg-slate-900 w-full">
            <div className="card-body">
                <h2 className="card-title text-accent font-bold lg:text-2xl">{title}</h2>
                <p className="text-amber-50">{content}</p>
                <div className="flex justify-between items-center mt-6">
                    <time dateTime={date} className='text-slate-600'>{date}</time>
                    <div className="flex gap-4">
                        <SquarePen onClick={handleEdit} className='text-white cursor-pointer hover:text-cyan-400 hover:scale-110 transition-all'></SquarePen>
                        <Trash onClick={() => setIsModalOpen(true)} className='text-red-400 cursor-pointer hover:text-red-500 hover:scale-110 transition-all'></Trash>
                    </div>
                </div>
            </div>
            <DeleteModal 
                isOpen={isModalOpen} 
                onClose={() => setIsModalOpen(false)} 
                onConfirm={handleConfirmDelete} 
            />
        </div>
    )
}

export default CardNote
