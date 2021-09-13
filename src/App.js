import "./App.css";
import ShowTotal from "./components/ShowTotal";
import TakeInput from "./components/TakeInput";
import styled from "styled-components";

const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  margin-top: 3em;
  @media screen and (max-width: 480px) {
    margin-top: 0.5em;
  }
`;

const Para = styled.p`
  letter-spacing: 1rem;
  line-height: 0%;


  text-transform: uppercase;
  font-weight: 700;
  font-size: 1.3em;
color: hsl(183, 100%, 12%);
@media screen and (max-width: 480px) {
  font-size: 1.2em;    
  letter-spacing: 0.9rem;

  }


`;

function App() {
  return (
    <>
      <Header>
        <Para>Spli</Para>
        <Para>tter</Para>
      </Header>

      <div className="App">
        <TakeInput />
        <ShowTotal />
      </div>
    </>
  );
}

export default App;
