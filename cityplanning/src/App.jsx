import Body from "./Body";
import Header from "./header/Header";
import Footer from "./Footer";
import styled from "styled-components";
import "./index.css";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: 1.5fr 9.5fr 1fr;
  width: 100vw;
  height: 100vh;
  text-align: center;
  background: var(--one-hundred);
  margin: auto;
`;

function App() {
  return (
    <Wrapper>
      <Header />
      <Body />
    </Wrapper>
  );
}

export default App;
