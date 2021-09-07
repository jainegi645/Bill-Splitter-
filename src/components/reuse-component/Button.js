import styled from "styled-components";
import { space, color, layout,typography } from "styled-system";

const Btn = styled.button`
  border-radius: 4px;
  cursor: pointer;
  outline: none;
  border: none;
  font-family: "Space Mono", monospace;

  ${space}
  ${color}
  ${layout} 
  ${typography}

 
  
`;

export default Btn;
