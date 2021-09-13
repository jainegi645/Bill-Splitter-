import React from "react";
import styled from "styled-components";



const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom:1.4em ;
  /* border: 1px solid yellow; */
`;

const InputBox = styled.input`
  padding: 0.2em 0.8em;
  width: 85%;
  margin-top: 0.3em;
  background-color: hsl(189, 41%, 97%);
  border: 1px solid white;
  color: hsl(183, 100%, 12%);
  font-family: "Space Mono", monospace;
  font-weight: 700;
  font-size: 1.1em;
  text-align: end;
  outline: none;
  background-image: url(${(props) => props.img});
  background-repeat: no-repeat;
  background-position: left;
  background-position-x: left 0.8em;
  border-radius: 4px;
  &:focus {
    border: hsl(184, 100%, 34%) solid 1px;
    outline-offset: -2px;
  }
`;

const Label = styled.label`
  font-size: 0.9em;
  align-self: flex-start;
  letter-spacing: 0.01rem;
  font-family: "Space Mono", monospace;
  color: hsl(196, 14%, 49%);
  font-weight: 700;
`;

function Input({ placeholder, label, img, onChange }) {
  return (
    <Wrapper>
      <Label> {label}</Label>
      <InputBox img={img} placeholder={placeholder} onChange={onChange}></InputBox>
    </Wrapper>
  );
}

export default Input;
