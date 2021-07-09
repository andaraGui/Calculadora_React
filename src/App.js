import React, { useEffect, useState } from "react";


import * as S from './styled';

import { buttonChar } from './Assets/assets'

//COMPONENTS
import Button from "./Button";
import Display from "./Display";

function App() {

  const [displayContent, setDisplayContent] = useState('0');
  const [prevContent, setPrevContent] = useState('0')
  const [operation, setOperation] = useState();



  function buttonAction(buttonValues) {
    if (buttonValues.type === 'number') {
        numberAction(buttonValues);
    } else if (buttonValues.type === 'action') {
        operatorAction(buttonValues);
    }
  }


  function numberAction({ value, type} ){
      if(displayContent === prevContent){
        setDisplayContent(value);
      }else{
        setDisplayContent(displayContent + value);
      }
  }

  function operatorAction({ value, type }){
    
      if(!operation){
        setPrevContent(displayContent)
        setOperation(value)
      }else{
        if(operation === '+'){
          const sum = parseInt(displayContent) + parseInt(prevContent)
          console.log(sum)
          setPrevContent(sum);
          setDisplayContent(sum)
          
        }
      }
  
  } 


  return (
    <>
      <h2>Calculadora React</h2>
      <h3>{prevContent}</h3>
      <S.Content >
        <Display displayContent={displayContent} setDisplayContent={setDisplayContent} />
        {buttonChar.map((elem) => {
          return <Button key={elem.value} buttonValues={elem} action={buttonAction} />
        })}
      </S.Content>
    </>
  );
}

export default App;
