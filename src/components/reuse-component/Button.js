import styled from 'styled-components';
import {space,color } from 'styled-system';

export const Btn = styled.button`
${space}
${color}

  background-color: ${props => props.bgColor};
  width: ${props => props.large ? `80%` : `50% ` };
  /* padding:${props => props.large? `0.6em 3em`: `0.3em 1em`}; */
  color:${props => props.color};
  font-family: "Space Mono", monospace;
  border-radius: 4px;
  cursor: pointer;
  outline: none;
  border: none;
  &:focus {
  border:${props => props.focusborder}  solid 1px;
  background-color:${props => props.focusbgColor};  
  /* outline-offset: -3px; */
  }
`;

function Button(bgcolor,width,padding,color,focusborder,focusbgColor,value,children) {
  return (
  <Btn bgcolor={bgcolor} width={width} padding={padding} color={color} focusborder={focusborder} focusbgColor={focusbgColor} value= {value} > {props=>props.children} </Btn>
  )
}

export default Button


