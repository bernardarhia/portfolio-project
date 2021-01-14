import React from "react";
import Button from "../components/containers/Button";
import FormHeaderText from "../components/containers/FormHeaderText";
import Input from "../components/containers/Input.";
import FormScreen from "../components/screens/FormScreen";
import { Link } from "react-router-dom";

const ResetPassword = () => {
 
  return (
    <FormScreen>
      <form>
        <FormHeaderText className="">
          <h1>
            Opps, <span>😕</span>
          </h1>
        </FormHeaderText>
        <div className="email">
          <Input
            className="input"
            type="text"
            placeholder="Email"
         
          />
        </div>
        <div className="submit_btn">
          <Button className="btn btn_small blue">
              Email
          </Button>
        </div>
        <div
          className="recovery"
          style={{ display: "flex", justifyContent: "flex-end" }}
        >
          <Link to="/login">Login</Link>
        </div>
      </form>
    </FormScreen>
  );
};

export default ResetPassword;
