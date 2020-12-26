import React from "react";
import Button from "../components/containers/Button";
import CountryList from "../components/containers/CountryList";
import FormHeaderText from "../components/containers/FormHeaderText";
import WorkList from "../components/containers/WorkList";
import FormScreen from "../components/screens/FormScreen";
import { countryList } from "../contents/countries";
import { workList } from "../contents/work";
const Final = () => {
  return (
    <FormScreen>
      <form>
        <FormHeaderText className="">
          <h1>You're Almost Done <span>🥳</span></h1>
        </FormHeaderText>
        <CountryList countryList={countryList} />
       <WorkList workList={workList} />
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
