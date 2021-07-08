import React from 'react';
import * as S from './styled';

export default function DisplayArea(props) {
    
function test(e){

    props.setContent(e.target.value)
    
}
    
    return (
        <div>
           <S.Display type="text" id="teste" onChange={test} value={props.content}/>
        </div>
        
    );
}