import React from "react";
import { Heading } from "../styled-components/elements";
import styled from "styled-components";
import about from "../images/about.jpg";

const Zafra = styled.div`
  height: 80%;
  display: grid;
  width: 70%;
  grid-template-rows: 0.1fr 1fr 1fr;
  gap: 20px;
  margin: auto;

  div img {
    width: 40%;
    /* height: 100%; */
  }
`;

const CpdcMandate = styled.div`
  background-color: var(--fifty);
  padding: 20px;
  text-align: justify;
  place-content: center;
`;

const MandateHeading = styled.h1`
  font-size: 20pt;
  margin: auto;
  text-align: center;
  margin-bottom: 10px;
`;

function AboutUs() {
  return (
    <Zafra>
      <Heading>About</Heading>
      <div>
        <img src={about}></img>
      </div>
      <CpdcMandate>
        <MandateHeading>OUR MANDATE</MandateHeading>
        The City Development Coordinator's Office in the Philippines plays a
        pivotal role in urban planning and governance. Its mandate, rooted in
        the Local Government Code of 1991, is to oversee the city's development
        planning, ensuring progress aligns with local needs and national goals.
        This office serves as the backbone of urban management, facilitating
        sustainable growth and fostering inclusive development. The primary
        responsibility of the City Development Coordinator is to prepare and
        update the city’s Comprehensive Land Use Plan (CLUP) and Comprehensive
        Development Plan (CDP). These plans guide zoning, infrastructure
        projects, and resource allocation, balancing economic growth with
        environmental sustainability. The office also coordinates with various
        stakeholders, including national government agencies, non-governmental
        organizations, and local communities, to ensure the seamless
        implementation of development programs. Public participation is a
        cornerstone of the office’s work. Through consultations and dialogues,
        the City Development Coordinator ensures that the voices of citizens are
        heard and integrated into the planning process. This approach promotes
        transparency and accountability while addressing the unique needs of
        diverse sectors. Additionally, the office plays a critical role in
        monitoring and evaluating the implementation of development programs and
        projects. It ensures that these initiatives adhere to the city's vision,
        meet timelines, and deliver tangible benefits to the community.
        Ultimately, the City Development Coordinator's Office is dedicated to
        building resilient, inclusive, and sustainable cities, creating an
        environment where every citizen can thrive and contribute to collective
        progress.
      </CpdcMandate>
    </Zafra>
  );
}

export default AboutUs;
