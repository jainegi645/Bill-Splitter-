import styled from "styled-components";
import { space, color, layout,typography } from "styled-system";

const Btn = styled.button`
  border-radius: 4px;
  cursor: pointer;
  outline: none;
  border: none;
  font-family: "Space Mono", monospace;
  &:focus{
    background-color: hsl(184, 100%, 40%);
    color: hsl(183, 100%, 12%);

  }
  ${space}
  ${color}
  ${layout} 
  ${typography}

 
  
`;

export default Btn;
