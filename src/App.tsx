import React, { useState } from "react";
import { Header } from "./container/Header";
import { GlobalStyle } from "./components/GlobalStyles";
import { BoxResult } from "./container/BoxResult";
import styled from "styled-components";
import BackgroundImage from './assets/background.png'

const Container = styled.div`
    background-image: url(${BackgroundImage});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media (max-width: 890px){
        justify-content: flex-start;
    }
`

export const App: React.FC = () => {
    const [location, setLocation] = useState<any | null>(null);

    return (
        <Container>
            <GlobalStyle />
            <Header setLocation={setLocation} hasLocation={!!location}/>
            {location && <BoxResult data={location} />}
        </Container>
    );
};