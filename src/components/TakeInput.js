import React from "react";
import TipBtn from "./TipBtn";
import Input from "./reuse-component/Input";
import icondollar from "../images/icondollar.svg";
import iconperson from "../images/iconperson.svg";


function TakeInput() {
  return (
    <div>
      <Input label="Bill" placeholder="0" img = {icondollar} />
      <TipBtn />
      <Input label="Number of People" placeholder="0"  img = {iconperson} />
    </div>
  );
}

export default TakeInput;
