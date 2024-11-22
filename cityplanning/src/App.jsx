import Body from "./Body";
import Header from "./header/Header";
import Footer from "./Footer";
import styled from "styled-components";
import "./index.css";

function App() {
  const Wrapper = styled.div`
    display: grid;
    /* grid-template-rows: 1fr 1fr 10fr 1fr; */
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: 1fr 10fr 1fr;
    width: 90vw;
    height: 100vh;
    text-align: center;
    background: var(--fifty);
    margin: auto;
    padding-top: 25px;
  `;

  return (
    <Wrapper>
      <Header />
      <Body />
      <Footer />
    </Wrapper>
  );
}

export default App;
