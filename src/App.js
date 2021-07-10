import React, { useState, useEffect } from "react";
import Button from "./Components/Button";
import Display from "./Components/Display";


import * as S from './styled';

//BUTTON DATA IMPORT
import { buttonData } from './data';

function App() {



  const [displayContent, setDisplayContent] = useState('0');
  const [prevContent, setPrevContent] = useState(displayContent)
  const [operation, setOperation] = useState('');

  function checkButtonType(isOperation, buttonContent) {
    if (!isOperation) {
      if (displayContent === prevContent) {
        setDisplayContent(buttonContent)
      } else {
        setDisplayContent(displayContent + buttonContent)
      }
    } else {

      setOperation(buttonContent)
      if(buttonContent === '+'){
      const value = parseInt(displayContent) + parseInt(prevContent)
      setDisplayContent(value.toString())
      setPrevContent(value.toString())
      }
    }
  }


  return (
    <>

      <h2>Calculadora React</h2>
      <h3>OPERAÇÃO: {operation}</h3>
      <h3>teste: {prevContent}</h3>
      <S.Content >
        <Display displayContent={displayContent} setDisplayContent={setDisplayContent} />
        {buttonData.map((elem) => {
          return <Button buttonContent={elem.value} isOperation={elem.isOperation} checkButtonType={checkButtonType} />
        })}
      </S.Content>
    </>
  );
}

export default App;
