import React from "react";
import TemplateOneContext from "./context/templateOneContext";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import editor from "./pages/editor";
function App() {
  return (
    <TemplateOneContext>
      <Router>
        <Switch>
          <Route path='/editor' exact component={editor} />
        </Switch>
      </Router>
    </TemplateOneContext>
  );
}

export default App;
