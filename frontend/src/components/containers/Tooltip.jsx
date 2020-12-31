import React from "react";
import { motion } from "framer-motion";
const Tooltip = ({ show, text, color, position, ...rest }) => {
  return (
    <>
      <p></p>
      {show && (
        <motion.div
          className="tooltip"
          style={{
            background: color ? color : "#5352ED",
            transform: `translate(${position.x}px,${position.y}px)`,
          }}
          {...rest}
        >
          <span> {text}</span>
          <div
            className="triangle"
            style={{ background: color ? color : "#5352ED" }}
          ></div>
        </motion.div>
      )}
    </>
  );
};

export default Tooltip;
