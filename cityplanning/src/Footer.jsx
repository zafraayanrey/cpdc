import React from "react";
import styled from "styled-components";
import { navMenu } from "./utils/navMenu";
import FooterResuableComponent from "./styled-components/FooterResuableComponent";
import { NavLink } from "react-router";

import { FaFacebookF } from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";
import { IoLogoInstagram } from "react-icons/io5";
import { FaTiktok } from "react-icons/fa";

const FooterContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  width: 100%;
  height: 100%;
  background-color: var(--two-hundred);
  place-content: center;
  margin-top: 20px;
  text-align: left;
  font-size: small;
  gap: 50px;
  padding: 10px 40px 10px 40px;

  a {
    text-decoration: none;
    color: var(--nine-hundred-fifty);
  }

  a:hover {
    font-weight: 600;
  }
`;

const UnorderedList = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  width: 30%;

  li {
    font-size: x-large;
    padding: 5px;
  }
`;
function Footer() {
  return (
    <FooterContainer>
      <FooterResuableComponent>
        <h1>City of Talisay - Local Government Unit</h1>
        <p>Fidel Bas St., Lawaan II, Talisay City, Cebu</p>
        <p>(032) 266-2452</p>
        <p>cpdccityoftalisaycebu@gmail.com</p>
        <br />
        <p>Contact Us</p>
        <div style={{ width: "20%" }}>
          <UnorderedList>
            <li>{<FaFacebookF />}</li>
            <li>{<AiOutlineYoutube />}</li>
            <li>{<IoLogoInstagram />}</li>
            <li>{<FaTiktok />}</li>
          </UnorderedList>
        </div>
      </FooterResuableComponent>
      <FooterResuableComponent>
        <h1>Links</h1>
        {navMenu.map((el, i) => (
          <NavLink key={i} to={el.path}>
            <p>{el.title}</p>
          </NavLink>
        ))}
      </FooterResuableComponent>
      <FooterResuableComponent>
        <h1>Privacy Policy</h1>
        <ul>
          <li>Terms of Service or Terms and Conditions.</li>
          <li>Cookie Policy or Consent.</li>
          <li>Disclaimers or legal notices.</li>
        </ul>
      </FooterResuableComponent>
      <FooterResuableComponent>
        <h1>Downloads</h1>
        <ul>
          <li>Locational Clearance Requirements</li>
          <li>Fencing Permit Requirements</li>
          <li>Building Permit Requirements </li>
          <li>Locational Clearance Requirements</li>
          <li>Fencing Permit Requirements</li>
          <li>Building Permit Requirements </li>
        </ul>
      </FooterResuableComponent>
    </FooterContainer>
  );
}

export default Footer;
