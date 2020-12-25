import React from "react";
import FormScreen from "../components/screens/FormScreen";
const Login = ({path}) => {
  const currentPage = path.replace("/", "");
  return (
    <FormScreen pageType={currentPage}>
      <form className="form">{/* Please write your form content here  */}</form>
    </FormScreen>
  );
};

export default Login;
