import React, { useState, useEffect } from "react";
import Button from './Components/Button';
import Display from './Components/Display'

import * as S from './styled';


function App() {

  const [displayContent, setDisplayContent] = useState('0');
  const [prevContent, setPrevContent] = useState('0');
  const [storeOperation, setStoreOperation] = useState('');
  const [lockOperation, setLockOperation] = useState(false);



  function numberAction(buttonValue) {
    if (displayContent === prevContent) {
      setDisplayContent(buttonValue);
    } else {
      setDisplayContent(displayContent + buttonValue)
    }
    if (lockOperation === false) {
      setLockOperation(true)
    }
   
  }


  function operatorAction(buttonValue) {
    setPrevContent(displayContent)
    if (lockOperation === true) {
      chooseOperation(storeOperation);
      setStoreOperation(buttonValue);
    } else {
      setStoreOperation(buttonValue)
    }
    
    
  }


  useEffect(() => {
    if(lockOperation === true){
      console.log('true')
    }else{
      console.log('false')
    }
  }, [lockOperation])


  function equals(a, b, op) {

  }

  function chooseOperation(elem) {

    if (elem === '+') {
      sum(displayContent, prevContent)
    } else
      if (elem === '-') {
        minus(displayContent, prevContent)
      } else
        if (elem === 'x') {
          mult(displayContent, prevContent)
        }
        setLockOperation(false)
  }





  function clearMem() {
    setDisplayContent('0');
    setPrevContent('0')
    setStoreOperation('')
  }


  function sum(a, b) {
    const sum = parseInt(a) + parseInt(b);
    setDisplayContent(sum.toString());
    setPrevContent(sum.toString());
  }

  function minus(a, b) {
    const minus = parseInt(b) - parseInt(a);
    setDisplayContent(minus.toString());
    setPrevContent(minus.toString());
  }

  function mult(a, b) {
    const mult = parseInt(b) * parseInt(a);
    setDisplayContent(mult.toString());
    setPrevContent(mult.toString());
  }



  return (
    <>
      <p>PREVCONTENT: {prevContent}</p>
      <p>OPERATOR: {storeOperation}</p>
      <S.Content >
        <Display content={displayContent} setContent={setDisplayContent} />

        <Button buttonValue={'7'} action={numberAction} />
        <Button buttonValue={'8'} action={numberAction} />
        <Button buttonValue={'9'} action={numberAction} />
        <Button buttonValue={'x'} action={operatorAction} />
        <Button buttonValue={'4'} action={numberAction} />
        <Button buttonValue={'5'} action={numberAction} />
        <Button buttonValue={'6'} action={numberAction} />
        <Button buttonValue={'-'} action={operatorAction} />
        <Button buttonValue={'1'} action={numberAction} />
        <Button buttonValue={'2'} action={numberAction} />
        <Button buttonValue={'3'} action={numberAction} />
        <Button buttonValue={'+'} action={operatorAction} />
        <Button buttonValue={'ce'} action={clearMem} />
        <Button buttonValue={'0'} action={numberAction} />
        <Button buttonValue={','} action={operatorAction} />
        <Button buttonValue={'='} action={operatorAction} />

      </S.Content>
    </>
  );
}

export default App;
