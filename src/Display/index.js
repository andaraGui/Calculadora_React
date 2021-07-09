import * as S from './styled'

export default function Display({ displayContent, setDisplayContent }){

    function onChangeHandle(e){
        setDisplayContent(e.target.value)
    }

    return(
        <S.Input type="text" value={displayContent} onChange={onChangeHandle}/>
    )
}