import { motion } from "framer-motion";
import { X, CheckCircle2, AlertCircle } from "lucide-react";

function DescriptionModal({
  isOpen,
  taskTitle,
  currentDescription,
  suggestedDescription,
  isLoading,
  error,
  onAccept,
  onReject,
}) {
  if (!isOpen) return null;

  return (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{opacity:0}}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50"
    >
      <motion.div
        initial={{ scale: 0.9, y:20 }}  
        animate={{ scale: 1, y:0 }}
        exit={{ scale:0.9, y:20}}
        className="bg-white/95 rounded-xl shadow-2xl max-w-md w-full p-6 space-y-4"
    >
        <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-gray-800">
                Sugestão de IA
            </h2>
            <button
                onClick={onReject}
                className="p-1 hover:bg-gray-200 rounded-lg transition-colors"   
            > 
                 <X size={20} className="text-gray-600" />
            </button>
        </div>

        <div>
            <p className="text-sm text-gray-600 mb-1">Tarefa:</p>
            <p className="font-semibold text-gray-800">{taskTitle}</p>
        </div>

        <div>
            <p className="text-sm text-gray-600 mb-1">Descrição Atual:</p>
            <p className="text-gray-700 bg-gray-100 p-3 rounded-lg text-sm">{currentDescription}</p>
        </div>

        {isLoading && (
            <div className="flex items-center justify-center py-6">
                <div className="animate-spin">
                    <div className="w-8 h-8 border-4 border-purple-200 border-t-purple-500 rounded-full"></div>
                </div>
                <span className="ml-3 text-gray-600">Gerando Sugestão...</span>
            </div>
        )}

        {error && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-3 flex gap-2">
            <AlertCircle size={20} className="text-red-600 flex-shrink-0" />
            <p className="text-sm text-red-600">{error}</p>
          </div>
        )}

        {suggestedDescription && !isLoading && (
          <div>
            <p className="text-sm text-gray-600 mb-1">Descrição Sugerida:</p>
            <p className="text-gray-700 bg-gradient-to-br from-purple-50 to-cyan-50 p-3 rounded-lg text-sm border border-purple-200">
              {suggestedDescription}
            </p>
          </div>
        )}

        {!isLoading && (
          <div className="flex gap-3 pt-4">
            <button
              onClick={onReject}
              className="flex-1 px-4 py-2 rounded-lg bg-gray-200 text-gray-800 font-medium hover:bg-gray-300 transition-colors"
            >
              Rejeitar
            </button>
            <button
              onClick={onAccept}
              disabled={!suggestedDescription}
              className="flex-1 px-4 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-medium hover:from-purple-600 hover:to-cyan-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              <CheckCircle2 size={18} />
              Aceitar
            </button>
          </div>
        )}

        </motion.div>
    </motion.div>
  );
}
export default DescriptionModal;
