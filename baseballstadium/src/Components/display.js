import React from "react";
import Styled from "styled-components";


const Container = Styled.div `
    display: flex;
    flex-direction: row;
    justify-content: center;
`
const EachContainer = Styled.div `
    margin: 20px;
    width: 50px;
    height: 80px;
    border: 2px solid black;
`

function Display({balls, strikes})  {
    console.log(balls)
        return (
            <Container>
                <EachContainer data-testid="balls">
                 {balls}
                </EachContainer>
                <EachContainer data-testid="strikes">
                 {strikes}
                </EachContainer>
            </Container>
        )
    


}

export default Display;