import React from "react";
import Button from "./components/containers/Button";
import Input from "./components/containers/Input.";
import Tooltip from "./components/containers/Tooltip";
function App() {
  return (
    <>
      <Button className="btn btn_shadow btn_small blue">Log in</Button>
      <Input type="text" className="input" />
          <Tooltip
            text="Bernard Arhia"
            color="#3736d4"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
          />
       
    </>
  );
}

export default App;
