import Body from "./Body";
import Header from "./header/Header";
import Footer from "./Footer";
import styled from "styled-components";
import "./index.css";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: 1fr 1fr 1fr;
  width: 100vw;
  height: auto;
  text-align: center;
  background: var(--fifty);
  margin: auto;
  padding-top: 25px;
`;

function App() {
  return (
    <Wrapper>
      <Header />
      <Body />
      <Footer />
    </Wrapper>
  );
}

export default App;
