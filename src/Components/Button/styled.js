import styled from 'styled-components';

export const Button = styled.button`
    width: 24%;
    height: 16%;
    margin:  1px;
    border-radius: 4px;
    transition: color 0.2s ease;
    border: none;
    color: gray;
    font-size: 18px;
    &:active{
        font-size: 19px;
    }
    &:hover{
        transition: background-color 0.2s ease-in;
        background-color: #94D0CC;
        border: 1px solid white;
        color: #fff;
    }
    
`