import Body from "./Body";
import Header from "./header/Header";
import Footer from "./Footer";
import styled from "styled-components";
import "./index.css";
import Menu from "./header/Menu";
import Slider from "./header/Slider";
import Carousel from "./header/Carousel";
import PageNavigation from "./PageNavigation";

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 0.5fr 3fr 7fr 1fr;
  width: 100vw;
  height: 100dvh;
  text-align: center;
  background: var(--one-hundred);
  margin: auto;
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
