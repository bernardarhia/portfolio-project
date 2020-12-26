import React from "react";
import Button from "../components/containers/Button";
import FormHeaderText from "../components/containers/FormHeaderText";
import Input from "../components/containers/Input.";
import FormScreen from "../components/screens/FormScreen";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {AiOutlineEye} from 'react-icons/ai'
const Signup = ({ path }) => {
  const currentPage = path.replace("/", "");

  return (
    <FormScreen pageType={currentPage}>
      <motion.form
        initial={{ x: "-100vw", scale: 0, opacity: 0 }}
        animate={{ x: 0, scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <FormHeaderText className="">
          <h1>Create Account</h1>
        </FormHeaderText>

        <div
          className="name"
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "2rem",
          }}
        >
          <Input className="input" placeholder="First Name" type="text" />
          <Input className="input" placeholder="Last Name" type="text" />
        </div>
        <div className="email">
          <Input className="input" type="text" placeholder="Email" />
        </div>
        <div className="password">
          <Input className="input" type="password" placeholder="Password" />
          <AiOutlineEye />
        </div>
        <div className="recovery" style={{display:'flex',justifyContent:'space-between'}}>
          <div className="terms_checked">
            <Input type="checkbox" className="input"/>
          </div>
          <p>
            {" "}
            <span style={{ display: "block" }}>
              By signing up, you have read and agreed to our{" "}
            </span>
            <Link to="/terms_and_conditions">terms and conditions</Link>
          </p>
        </div>
        <div className="submit_btn">
          <Button className="btn btn_small blue">Sign up</Button>
        </div>
      </motion.form>
    </FormScreen>
  );
};

export default Signup;
