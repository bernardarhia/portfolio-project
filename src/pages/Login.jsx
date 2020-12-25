import React from "react";
import Button from "../components/containers/Button";
import FormHeaderText from "../components/containers/FormHeaderText";
import Input from "../components/containers/Input.";
import FormScreen from "../components/screens/FormScreen";
import { motion } from "framer-motion";
const Login = ({ path }) => {
  const currentPage = path.replace("/", "");
  return (
    <FormScreen pageType={currentPage}>
      <motion.form
        className="form"
        animate={{ x: 0, scale: 1 }}
        initial={{ x: "-100vw", scale: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <FormHeaderText className="">
          <h1>
            Howdy, <span>😊</span>
          </h1>
        </FormHeaderText>
      </motion.form>
    </FormScreen>
  );
};

export default Login;
