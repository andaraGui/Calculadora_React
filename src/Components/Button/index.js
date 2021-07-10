import * as S from './styled'


export default function Display({ buttonValue , action }){

    function buttonHandler(){
        action(buttonValue);
    }

    return(
        <>  
            <S.Button onClick={buttonHandler} >{buttonValue}</S.Button>
        </>
    );
}