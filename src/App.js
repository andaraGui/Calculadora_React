import React, { useState, useEffect } from "react";
import Button from './Components/Button';
import Display from './Components/Display'

import * as S from './styled';


function App() {

  const [displayContent, setDisplayContent] = useState('0');
  const [prevContent, setPrevContent] = useState('0');
  const [ resetDisplayParamether ,setResetDisplayParamether] = useState('0')
  const [prevOperation, setPrevOperation] = useState([])
  const [storeOperation, setStoreOperation] = useState('');
  const [lockOperation, setLockOperation] = useState(false);



  function numberAction(buttonValue) {
    if (displayContent === resetDisplayParamether) {
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
    if (lockOperation === true) {
      console.log('true')
    } else {
      console.log('false')
    }
  }, [lockOperation])




  function chooseOperation(elem) {

    if (storeOperation !== '') {//SET THE PAST OPERATION
      setPrevOperation([prevContent, storeOperation, displayContent])
    }



    if (elem === '+') {
      sum(displayContent, prevContent)
    } else
      if (elem === '-') {
        minus(displayContent, prevContent)
      } else
        if (elem === 'x') {
          mult(displayContent, prevContent)
        } else
          if (elem === '=') {
            equals(displayContent, prevContent, storeOperation)
          } else
            if (elem === '/') {
              div(displayContent, prevContent, storeOperation)
            }
              setLockOperation(false)
  }

  function clearMem(buttonValue) {
    if (buttonValue === 'C') {
      setDisplayContent('0');
      setPrevContent('0')
      setStoreOperation('')
      setPrevOperation([])
    }else
    if (buttonValue === "CE"){
      setDisplayContent('0');
      setResetDisplayParamether('0')
    }
  }

  function negPos() {
    const num = parseFloat(displayContent);
    const numString = num + (2 * -num)
    setDisplayContent(numString.toString());
  }

  function clearNum() {
    const temp = displayContent.slice(0, -1);
    setDisplayContent(temp)
  }

  function sum(a, b) {
    const sum = parseFloat(a) + parseFloat(b);
    setDisplayContent(sum.toString());
    setPrevContent(sum.toString());
  }

  function minus(a, b) {
    const minus = parseFloat(b) - parseFloat(a);
    setDisplayContent(minus.toString());
    setPrevContent(minus.toString());
  }

  function mult(a, b) {
    const mult = parseFloat(b) * parseFloat(a);
    setDisplayContent(mult.toString());
    setPrevContent(mult.toString());
  }

  function div(a, b) {
    const div = parseFloat(b) / parseFloat(a);
    setDisplayContent(div.toString());
    setPrevContent(div.toString());
  }


  function equals(a, b, op) {
    chooseOperation(op);
    setStoreOperation('')
  }


useEffect(()=>{
  setResetDisplayParamether(prevContent);
},[prevContent])


  return (
    <>
      <p>PREOPERATION: {prevOperation} = {prevContent}</p>
      <p>OPERATOR: {storeOperation}</p>
      <S.Content >
        <Display content={displayContent} setContent={setDisplayContent} />
        <Button buttonValue={'CE'} action={clearMem} />
        <Button buttonValue={'C'} action={clearMem} />
        <Button buttonValue={'<<'} action={clearNum} />
        <Button buttonValue={'/'} action={operatorAction} />
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
        <Button buttonValue={'+/-'} action={negPos} />
        <Button buttonValue={'0'} action={numberAction} />
        <Button buttonValue={'.'} action={numberAction} />
        <Button buttonValue={'='} action={operatorAction} />

      </S.Content>
    </>
  );
}

export default App;
