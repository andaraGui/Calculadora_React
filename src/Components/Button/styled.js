import styled from 'styled-components';

export const Button = styled.button`
    width: 24%;
    height: 15%;
    margin:  1px;
    border-radius: 4px;
    border: none;
    transition: background-color 0.3s ease;
    transition: color 0.3s ease;
    &:hover{
        
        background-color: lightgray;
        border: 1px solid white;
        color: #fff;
    }
    
`