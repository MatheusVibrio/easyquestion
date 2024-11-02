import React, { useState } from "react";
import { toast } from "react-toastify";

const ModalComentario = ({ isOpen, onClose, onSubmit }: any) => {
  const [comentario, setComentario] = useState("");

  const handleSubmit = () => {

    if (!comentario.trim()) {
      toast.error("Por favor, digite um comentário antes de enviar.");
    } else {
      onSubmit(comentario);
    }

    
    setComentario("");
  };

  if (!isOpen) return null;

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg p-4 w-1/3">
        <h2 className="text-lg font-bold mt-2 text-gray-750">Por que essa questão foi reprovada?</h2>
        <p className="text-xs mb-4 mt-1 text-gray-700">Documente porque essa questão foi reprovada.<br></br> Aqui você pode deixar suas considerações, dicas ou comentários para o profesor corrigi-la.</p>
        <textarea
          className="w-full h-40 p-2 border border-gray-300 rounded-md text-xs"
          value={comentario}
          placeholder="Digite aqui seu comentário"
          onChange={(e) => setComentario(e.target.value)}
          required={true}
        />
        <div className="flex justify-end mt-4">
          <button
            className="mr-2 px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400"
            onClick={onClose}
          >
            <p className="text-xs font-bold">Cancelar</p>
          </button>
          <button
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            onClick={handleSubmit}
          >
            <p className="text-xs font-bold">Enviar</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalComentario;
