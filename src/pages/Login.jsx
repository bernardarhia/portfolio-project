import React,{useState} from "react";
import Button from "../components/containers/Button";
import FormHeaderText from "../components/containers/FormHeaderText";
import Input from "../components/containers/Input.";
import FormScreen from "../components/screens/FormScreen";
import { Link } from "react-router-dom";
import Loader from "../components/containers/Loader";
import { AiOutlineEye } from "react-icons/ai";
const Login = ({ path }) => {
  const [isLoading, setIsloading] = useState(false)
  const currentPage = path.replace("/", "");

  const handleSubmit = e=>{
    e.preventDefault()
  }
  return (
    <FormScreen pageType={currentPage}>
      <form
        onSubmit={handleSubmit}
      >
        <FormHeaderText className="">
          <h1>
            Howdy, <span>😊</span>
          </h1>
        </FormHeaderText>

        <div className="email">
          <Input className="input" type="text" placeholder="Email" />
        </div>
        <div className="password">
        <Input className="input" type="password" placeholder="Password" />
        <AiOutlineEye />
        </div>
        <div className="submit_btn">
          <Button className="btn btn_small blue">Log in</Button>
        </div>
        <div className="recovery" style={{display:'flex', justifyContent:'flex-end'}}>
          <Link to='/recovery'>Recover password</Link>
        </div>
      </form>
    </FormScreen>
  );
};

export default Login;
