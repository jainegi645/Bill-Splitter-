/* eslint-disable no-undef */
import React  from "react";
import styled from "styled-components";
import Btn from "./reuse-component/Button";
import  {tipAction} from "../actions/index"
import {useDispatch} from 'react-redux'; 

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;


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
  grid-gap: 0.8em;
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
  // const [Discount, setDiscount] = useState(0);
  const dispatch = useDispatch();


  return (
    <Wrapper>
      <Label>Select Tip % </Label>
      <Grid>
        <Btn onClick = {()=> dispatch(tipAction(5))}  color='white' bg = "hsl(183, 100%, 12%)" minWidth="50%" maxWidth="50%" padding="0.5em 1em" fontWeight={700} >5%</Btn>
        <Btn onClick = {()=> dispatch(tipAction(10))}  color='white' bg = "hsl(183, 100%, 12%)" minWidth="50%" maxWidth="50%" padding="0.4em 1em" fontWeight={700}>10%</Btn>
        <Btn onClick = {()=> dispatch(tipAction(15))}  color='white' bg = "hsl(183, 100%, 12%)" minWidth="50%" maxWidth="50%" padding="0.4em 1em" fontWeight={700}>15%</Btn>
        <Btn onClick = {()=> dispatch(tipAction(25))}  color='white' bg = "hsl(183, 100%, 12%)" minWidth="50%" maxWidth="50%" padding="0.4em 1em" fontWeight={700}>25%</Btn>
        <Btn onClick = {()=> dispatch(tipAction(50))}  color='white' bg = "hsl(183, 100%, 12%)" minWidth="50%" maxWidth="50%" padding="0.4em 1em" fontWeight={700}>50%</Btn>
        <Input onChange = {(e)=> dispatch(tipAction(e.target.value))}  type="numeric" inputmode="numeric"  placeholder="Custom" ></Input>
      </Grid>
    </Wrapper>
  );
}

export default DiscountBtn;
