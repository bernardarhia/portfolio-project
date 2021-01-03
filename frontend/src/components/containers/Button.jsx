import React from "react";
import { motion } from "framer-motion";
const Button = ({ children, ...rest }) => {
  return <motion.button {...rest}   whileTap={{ scale: 0.8 }}>{children}</motion.button>;
};

export default Button;
