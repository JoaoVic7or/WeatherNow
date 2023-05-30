import styled from "styled-components";

export const Container = styled.div`
    background: rgba(255,255,255,0.664);
    display: flex;
    border-radius: 0 0 10px 10px;
    height: 500px;
    width: 50%;
    max-width: 500px;
    flex-direction: column;
    @media (max-width: 890px){
        width: 100%;
        max-width: 100%;
        height: 100vh;
        border-radius: 0;
    }
`
export const Ul = styled.ul`
    width: 100%;
`
export const Bloco = styled.div`
    width: 100%;
    background: #fff;
    text-align: center;
    padding: 30px 0;
`
export const BlocoTempInfo = styled.div`
    display: flex;
    align-items: center;
    font-size: 1.5rem;
    gap: 10px;
    justify-content: center;
    padding: 6px 0;
`