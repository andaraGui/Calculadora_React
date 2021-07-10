import * as S from './styled'

export default function Display({ displayContent, setDisplayContent }){
    
    function changeHandler(e){  
        setDisplayContent(e.target.value)
    }

    return(
        <>
            <S.DisplayInput value={displayContent} onChange={changeHandler} type="text"/>
        </>
    );    

}