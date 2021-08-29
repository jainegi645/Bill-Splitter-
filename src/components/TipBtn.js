import React,{useState} from "react";
import styled from "styled-components";
import Btn from "./reuse-component/Button";
// import { lighten, modularScale } from 'polished';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* border: 1px solid red; */
`;

/*const Btn = styled.a`
  background-color: hsl(183, 100%, 12%);
  width: 50%;
  padding: 0.3em 1em;
  color: white;
  font-family: "Space Mono", monospace;
  border-radius: 4px;
  cursor: pointer;
  outline: none;
  border: none;
  &:focus {
  border: hsl(184, 100%, 34%) solid 1px;
  background-color:yellow;  
  outline-offset: -3px;
  }
`;
*/
const Label = styled.label`
  font-size: 0.9em;
  align-self: flex-start;
  letter-spacing: 0.01rem;
  font-family: "Space Mono", monospace;
  color: hsl(196, 14%, 49%);
  font-weight: 700;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1em;
  margin-top: 0.5em;
`;
const Input = styled.input`
  width: 50%;
  text-align: end;
  background-color: hsl(189, 41%, 97%);
  padding: 0.3em 1em;
  font-family: "Space Mono", monospace;
  letter-spacing: 0.01rem;
  font-size: 1em;
  font-weight: 700;
  outline: none;
  border: 1px solid white;
  border-radius: 4px;
  &:hover {
    border: hsl(184, 100%, 34%) solid 1px;
    outline-offset: -2px;
  }

`;

function DiscountBtn() {

  //States
  const [Discount, setDiscount] = useState(0);


  //functions to perform changes 
 

  return (
    <Wrapper>
      <Label>Select Tip %  {Discount}</Label>
      <Grid>
        <Btn width= {'large'} padding = {'large'} onClick = {()=> setDiscount(5)} value = {'4%'} children = {'hasd'} color='black'>  </Btn>
        <Btn  onClick = {()=> setDiscount(10)}>10%</Btn>
        <Btn  onClick = {()=> setDiscount(15)}>15%</Btn>
        <Btn  onClick = {()=> setDiscount(25)}>25%</Btn>
        <Btn  onClick = {()=> setDiscount(50)}>50%</Btn>
        <Input type="numeric" inputmode="numeric"  placeholder="Custom" onChange = {()=> setDiscount()}></Input>
      </Grid>
    </Wrapper>
  );
}

export default DiscountBtn;
