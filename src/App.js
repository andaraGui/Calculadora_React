import React, { useState, useEffect } from "react";
import Button from './Components/Button';
import Display from './Components/Display'

import * as S from './styled';


function App() {

  const [displayContent, setDisplayContent] = useState('0');
  const [prevContent, setPrevContent] = useState('0');
  const [storeOperation, setStoreOperation] = useState('')
  const [lockOperation, setLockOperation] = useState(false)
  const [allowChangeOperation, setAllowChangeOperation] = useState(false)


  function numberAction(buttonValue) {
    if (lockOperation === true) {
      setLockOperation(false)
    }
    if (displayContent === prevContent) {
      setDisplayContent(buttonValue);
    } else {
      setDisplayContent(displayContent + buttonValue);
    }
  }


  function operatorAction(buttonValue) {

    if (storeOperation === '') {
      setStoreOperation(buttonValue);
      setPrevContent(displayContent);
    } else if (buttonValue === storeOperation) {
      if (lockOperation === false) {
        chooseOperation(storeOperation);
        setLockOperation(true)
      }
    } else {
      chooseOperation(storeOperation);
      setStoreOperation(buttonValue)
    }
  }

  function clearMem(){
    setDisplayContent('0');
    setPrevContent('0')
  }

  function chooseOperation(elem) {
    
    if (elem === '+') {
        sum(displayContent, prevContent)
    } else
    if (elem === '-') {
        minus(displayContent, prevContent)
    }
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



  useEffect(() => {
    console.log(lockOperation)
  }, [lockOperation])

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
