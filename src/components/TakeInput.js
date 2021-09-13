/* eslint-disable no-undef */
/* eslint-disable no-restricted-globals */
import React from "react";
import TipBtn from "./TipBtn";
import Input from "./reuse-component/Input";
import icondollar from "../images/icondollar.svg";
import iconperson from "../images/iconperson.svg";
import {useDispatch} from 'react-redux'; 
import {billAction,personAction} from '../actions/index';
import styled from "styled-components";

const Wrapper = styled.div`
padding-left:1em ;
background-color: #fff;
border-radius: 30px;

@media screen and (min-width: 480px) {
       width:50%;
       border-radius: 30px;
     }
`;
function TakeInput() {
  const dispatch = useDispatch();
  return (
    <Wrapper>
        
      <Input label="Bill" placeholder="0" img = {icondollar}   onChange={(e)=>dispatch(billAction(e.target.value))}/>
      <TipBtn/>
      <Input label="Number of People" placeholder="0"  img = {iconperson} onChange= {(e)=> dispatch(personAction (e.target.value))} />
   
    </Wrapper>
  );


}

export default TakeInput;
