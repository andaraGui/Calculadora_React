import React, {useState, useEffect} from 'react';

import * as S from './styled'

//Components



export default function Button(props){



    return(
        <div> 
            <S.Button  type="button"  onClick={() => props.click(props.value)}>{props.value}</S.Button>    
        </div>
    )
}