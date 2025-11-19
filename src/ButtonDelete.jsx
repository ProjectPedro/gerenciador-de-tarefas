import { motion } from "framer-motion";

function ButtonDelete(props) {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      {...props}
      className="p-2 rounded-lg bg-red-500/30 hover:bg-red-500/50 text-red-300 hover:text-red-200 transition-all duration-200 border border-red-500/50"
    />
  );
}

export default ButtonDelete;
