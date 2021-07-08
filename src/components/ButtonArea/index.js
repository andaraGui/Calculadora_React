import React from 'react';
import * as S from './styled'

//subComponents
import Button from '../Button';


export default function ButtonArea(  props ) {

    let buttonArray = ['7', '8', '9','x', '4', '5', '6','-', '1', '2', '3','+','#', '0',',','='] ;
  
    return (
        <S.ButtonContainer >
            {buttonArray.map((elem) => { return <Button key={elem} value={elem} click={props.getInput}/> })}
        </S.ButtonContainer>
    );
}