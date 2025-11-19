import {motion} from 'framer-motion';

function ButtonDetails(props) {
  return (
    <motion.button
      whileHover={{ scale: 1.1}}
      whileTap= {{ scale:0.95}}
      {...props}
      className="p-2 rounded-lg bg-cyan-500/30 hover:bg-cyan-500/50 text-cyan-300 hover:text-cyan-200 transition-all duration-200 border border-cyan-500/50"
    />
  );
}

export default ButtonDetails;
