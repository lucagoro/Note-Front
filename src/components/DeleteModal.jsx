import { AlertTriangle } from 'lucide-react';

const DeleteModal = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60" 
        onClick={onClose}
      ></div>

      {/* Caja del Modal */}
      <div className="relative bg-slate-900 border border-slate-700 p-6 max-w-sm w-full rounded-lg shadow-xl">
        <div className="flex flex-col items-center text-center">
          <AlertTriangle className="text-red-400 w-12 h-12 mb-4" />
          
          <h3 className="text-accent font-bold text-xl mb-2">
            Eliminar Nota
          </h3>
          
          <p className="text-amber-50 text-sm mb-6">
            ¿Estás seguro de que deseas eliminar esta nota?
          </p>

          <div className="flex w-full gap-3">
            <button 
              onClick={onClose}
              className="flex-1 px-4 py-2 border border-slate-600 text-amber-50 font-medium rounded hover:bg-slate-800 transition-all cursor-pointer"
            >
              Cancelar
            </button>
            <button 
              onClick={onConfirm}
              className="flex-1 px-4 py-2 bg-red-500/20 border border-red-500/50 text-red-400 font-medium rounded hover:bg-red-500 hover:text-white transition-all cursor-pointer"
            >
              Eliminar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;