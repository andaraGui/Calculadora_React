import React, { useState, useEffect } from "react";


//Components
import DisplayArea from "./DisplayArea/index";
import ButtonArea from './ButtonArea'


function App() {

  let numSequence = [];
  const [content, setContent] = useState('0');

  function getInput(elem) {
    
    if(content === '0'){
      setContent(elem);
    }else{
      setContent(content + elem)
    }
  }



  useEffect(() => {
    console.log(content)
  }, [content])


  return (
    <div >

      <h1>Calculadora React</h1>
      <DisplayArea content={content} setContent={setContent} />
      <ButtonArea teste={'2'} getInput={getInput} />

    </div>
  );
}

export default App;
