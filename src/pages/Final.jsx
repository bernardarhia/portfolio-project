import { motion } from "framer-motion";
import React from "react";
import Button from "../components/containers/Button";
import FormHeaderText from "../components/containers/FormHeaderText";
import Input from "../components/containers/Input.";
import FormScreen from "../components/screens/FormScreen";
import { countryList } from "../contents/countries";
import { workList } from "../contents/work";
const Final = () => {
  return (
    <FormScreen>
      <form>
        <FormHeaderText className="">
          <h1>You're Almost Done</h1>
        </FormHeaderText>
        <div className="select">
          <select className="input">
            <option>Select a country</option>
            {countryList.map((country, index) => (
              <option value={country} key={index}>
                {country}
              </option>
            ))}
          </select>
        </div>
        <div className="select">
          <select className="input">
            <option>Select a country</option>
            {workList.map((work, index) => (
              <option value={work} key={index}>
                {work}
              </option>
            ))}
          </select>
        </div>
        <div className="submit_btn">
          <Button
            className="btn"
            style={{
              color: "#5352ED",
              background: "none",
              textDecoration: "underline",
              display:'flex', justifyContent:'flex-end'
            }}
          >
            Start Creating
          </Button>
        </div>
      </form>
    </FormScreen>
  );
};

export default Final;
