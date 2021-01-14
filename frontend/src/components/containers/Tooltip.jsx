import React from "react";
import {motion} from 'framer-motion';
const Tooltip = ({ text, color, ...rest }) => {
  return (
    <motion.div className="tooltip" style={{ background: color }} {...rest}>
     <span> {text}</span>
      <div className="triangle"
      style={{ background: color }}></div>
    </motion.div>
  );
};

export default Tooltip;
