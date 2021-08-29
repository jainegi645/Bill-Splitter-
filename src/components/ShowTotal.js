import React from 'react';
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-radius:17px;
  background-color: hsl(183, 100%, 12%);
  color: white;
  padding: 1.4em;
`;

const Section = styled.p`
display:flex;
flex-direction: column;
align-items: flex-start;
letter-spacing: 0.0rem;
  font-family: "Space Mono", monospace;
  font-weight: 700;
`;


const Span = styled.span`
 font-size: 0.8em;
  letter-spacing: 0.01rem;
  font-family: "Space Mono", monospace;
  color: hsl(196, 14%, 49%);
  font-weight: 700;
`;


const Reset = styled.button`
padding: 0.6em 3em;
color: hsl(183, 100%, 12%);
background-color: hsl(184, 100%, 40%);
font-family: "Space Mono", monospace;
font-weight: 700;
font-size: 1.1em;
letter-spacing: 0.1rem;
border-radius: 6px;
outline: none;
border: solid 1px hsl(184, 100%, 40%)  ;
`;

const Para = styled.p`
display:flex;
justify-content:space-between;
align-items: center;
margin-top:0rem;

`;

const Output = styled.p`
font-family: "Space Mono", monospace;
letter-spacing: -0.20rem;
font-size: 2.5em;
color: hsl(184, 100%, 40%);
line-height: 0.01rem;
`;

function ShowTotal() {
    return (
        <Wrapper>
        <Para>
        <Section>
        Tip Amount<Span>/  person</Span>
        </Section>

        <Output> $4.27</Output>
        </Para>

        <Para>
        <Section>
        Total <Span>/  person</Span>
        </Section>

        
        <Output>  $32.79</Output>
        </Para>

      <Reset>
      RESET
      </Reset>

        </Wrapper>
    )
}

export default ShowTotal
