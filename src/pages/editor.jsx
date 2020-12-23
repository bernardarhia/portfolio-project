import React, { useState } from "react";

const Editor = () => {
  const [element, setElement] = useState(null);
  const [fontSize, setFontSize] = useState(null);
  const [templateStyle, setTemplateStyle] = useState({
    introText: {
      fontSize: "",
    },
    paraText: {
      fontSize: "",
    },
  });
 
  const handleFontSize = (e) => {
    if (element !== null) {
   
      if(element.localName === 'h1'){
        element.style.fontSize = e.target.value + "px";
        setFontSize(e.target.value);
        setTemplateStyle({
          ...templateStyle,
          introText:{
            fontSize:e.target.value
          }
        })
      }
      if(element.localName === 'p'){
        element.style.fontSize = e.target.value + "px";
        setFontSize(e.target.value);
        setTemplateStyle({
          ...templateStyle,
          paraText:{
            fontSize:e.target.value
          }
        })
      }
    //  if(element.)
    }
  };
  return (
    <>
      <h1
      contentEditable={true}
      suppressContentEditableWarning={true}
        onClick={(e) => {
          setElement(e.target);
          setFontSize(+getComputedStyle(e.target).fontSize.replace("px", ""));
          
        }}
        style={{resize:'both', overflow:'hidden'}}
      >
      Hello world
      </h1>

      <p
        onClick={(e) => {
          setElement(e.target);
          setFontSize(+getComputedStyle(e.target).fontSize.replace("px", ""));
        }}
      >
          Edit me
      </p>

      {element !== null && (
        <input type="number" onChange={handleFontSize} value={fontSize} />
      )}
    </>
  );
};

export default Editor;
