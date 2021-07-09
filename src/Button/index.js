import * as S from './styled';

export default function Button({buttonValues, action}){

    function buttonHandler(){
        action(buttonValues);
    }

    return(
        <S.Button onClick={buttonHandler}> {buttonValues.value} </S.Button>
    );
}