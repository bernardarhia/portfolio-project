import React from "react";
import Button from "../components/containers/Button";
import FormHeaderText from "../components/containers/FormHeaderText";
import Input from "../components/containers/Input.";
import FormScreen from "../components/screens/FormScreen";
import { motion } from "framer-motion";


const Signup = ({ path }) => {
  const currentPage = path.replace("/", "");

  return (
    <FormScreen pageType={currentPage}>
      <motion.form
        className="form"
        initial={{ x: "-100vw", scale: 0, opacity:0 }}
        animate={{ x: 0, scale: 1, opacity:1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <FormHeaderText className="">
          <h1>
           Create Account
          </h1>
        </FormHeaderText>
      </motion.form>
    </FormScreen>
  );
};

export default Signup;
