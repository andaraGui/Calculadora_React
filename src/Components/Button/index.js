import * as S from './styled';

export default function Button({buttonContent, isOperation, checkButtonType}){

    function buttonHandler(){
        checkButtonType(isOperation, buttonContent)
    }

    return(
        <>
            <S.Button onClick={buttonHandler}>{buttonContent}</S.Button>
        </>
    );
}