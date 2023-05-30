import styled from "styled-components";

interface ContainerProps {
    hasLocation: boolean;
}

export const Container = styled.div<ContainerProps>`
    background: rgba(255,255,255,0.9);
    display: flex;
    padding: 10px;
    box-sizing: border-box;
    justify-content: center;
    align-items: center;
    width: 50%;
    max-width: 500px;
    border-radius: ${({ hasLocation }) => (hasLocation ? '10px 10px 0 0' : '10px')};
    h1{
        margin-right: 36px;
    }
    @media (max-width: 890px){
        flex-direction: column;
        h1{
            margin-right: 0;
        }
        max-width: 100%;
        width: 100%;
        border-radius: 0;
    }
`
export const Form = styled.form`
    box-shadow: 1px 1px 2px #000;
    border-radius: 10px;
    display: flex;
`
export const Input = styled.input`
    border: none;
    border-radius: 10px 0 0 10px;
    padding: 10px;
    outline: none;
    @media (max-width: 890px){
        font-size: 16px;
    }
`
export const Button = styled.button`
    border: none;
    background: #fff;
    border-radius: 0 10px 10px 0;
    padding: 10px;
    cursor: pointer;
`
export const Icon = styled.img`
    width: 15.6px;
`