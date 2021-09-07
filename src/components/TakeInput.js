/* eslint-disable no-undef */
/* eslint-disable no-restricted-globals */
import React from "react";
import TipBtn from "./TipBtn";
import Input from "./reuse-component/Input";
import icondollar from "../images/icondollar.svg";
import iconperson from "../images/iconperson.svg";
import {useDispatch} from 'react-redux'; 
import {billAction,personAction} from '../actions/index';


function TakeInput() {
  const dispatch = useDispatch();
  return (
    <div>
     
      <Input label="Bill" placeholder="0" img = {icondollar}  onChange={(e)=>dispatch(billAction(e.target.value))}/>
      <TipBtn/>
      <Input label="Number of People" placeholder="0"  img = {iconperson} onChange= {(e)=> dispatch(personAction(e.target.value))} />
    </div>
  );


}

export default TakeInput;
