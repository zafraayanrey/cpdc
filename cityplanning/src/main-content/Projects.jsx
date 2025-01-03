import React from "react";
import { Heading } from "../styled-components/elements";
import styled from "styled-components";
import { cityProjects } from "../utils/projectsUtil";
import ReadMore from "../utils/ReadMore";

const ProjectReadMore = styled(ReadMore)`
  width: 10%;
  background-color: pink;
`;

const ProjectContainer = styled.div`
  display: grid;
  width: 70%;
  background-color: var(--fifty);
  grid-template-columns: 1fr 5fr;
  margin: auto;
  font-weight: 400;
  justify-content: center;
  gap: 10px;
`;

const ProjectImage = styled.div`
  background-color: var(--two-hundred);
  padding: 20px;
`;

const ProjectDescContainer = styled.div`
  grid-template-rows: 1fr 2fr;
  background-color: var(--fifty);
  padding: 10px;
`;

const ProjectTitle = styled.div`
  font-weight: 800;
  text-align: left;
`;

const ProjectDescription = styled.div`
  margin-top: 5px;
  text-align: justify;
`;

function Projects() {
  return (
    <>
      <Heading>Projects</Heading>
      {cityProjects.map((el, i) => (
        <>
          <ProjectContainer key={i}>
            <ProjectImage>{el.url}</ProjectImage>
            <ProjectDescContainer>
              <ProjectTitle>{el.title}</ProjectTitle>
              <ProjectDescription>{el.description}</ProjectDescription>
              <ProjectReadMore>Read More</ProjectReadMore>
              <br />
            </ProjectDescContainer>
          </ProjectContainer>
          <br />
        </>
      ))}
      <br />
    </>
  );
}

export default Projects;
