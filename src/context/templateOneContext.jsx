import React, { createContext, useReducer } from "react";
import {templateOneState} from '../reducers/states/templateOneInitialState';
import {templateOneReducer} from '../reducers/reducers/templateOneReducer';

export const templateOneContext = createContext();
const TemplateOneContext = ({ children }) => {



  const [templateOneStyles, setTemplateOneStyles] = useReducer(templateOneReducer,templateOneState);
  return (
    <templateOneContext.Provider value={{ templateOneStyles, setTemplateOneStyles }}
    >
      {children}
    </templateOneContext.Provider>
  );
};

export default TemplateOneContext;
