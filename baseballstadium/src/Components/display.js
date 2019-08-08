import React from "react";
import Styled from "styled-components";


const Container = Styled.div `
    display: flex;
    flex-direction: row;
    justify-content: center;
`
const EachContainer = Styled.div `
    margin: 20px;
    align-items: center;
`

function Display({balls, strikes})  {
    console.log(balls)
        return (
            <Container>
                <EachContainer  >
                    <div data-testid="ball">
                    {balls}
                     </div>
                     
                </EachContainer>
                <p>Balls</p>
                <EachContainer  >
                    <div data-testid="strike">
                    {strikes}
                     </div>
                </EachContainer>
                <p>Strikes</p>
            </Container>
        )
    


}

export default Display;