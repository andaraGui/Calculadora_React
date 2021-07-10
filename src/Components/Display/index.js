import * as S from './styled'

export default function Display({ content , setContent }){
    
    function changeHandler(e){
        setContent(e.target.value)
    }
    
    return(
        <>
            <S.Display type="text" onChange={changeHandler} value={content}/>
        </>
    );
}