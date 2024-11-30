import React, { useState } from "react";
import "../index.css";
import { navMenu } from "../utils/navMenu";
import styled from "styled-components";

const MenuContainer = styled.ul`
  display: grid;
  height: auto;
  /* place-content: center; */
  grid-template-columns: repeat(${navMenu.length}, 1fr);
  font-size: 14px;
`;

const MenuItem = styled.li`
  list-style-type: none;
  place-content: center;
  height: auto;
  font-weight: 500;
  /* border: solid 1px black; */
  position: relative;
  cursor: pointer;

  &:hover {
    background-color: var(--four-hundred);
  }
`;

const SubItemContainer = styled.div`
  height: auto;
`;

const SubItem = styled.div`
  visibility: ${(props) => props.visibility};
  width: 100px;
  height: 25px;
  background-color: var(--two-hundred);
  position: absolute;
  top: 100%;
  bottom: 0;

  /* Prevent hover from affecting MenuItem */
  &:hover {
    background-color: var(--four-hundred);
  }
`;

const DropDown = styled.div`
  width: 200px;
  height: 40px;
  background-color: var(--two-hundred);
  place-content: center;

  /* Prevent hover from affecting MenuItem */
  &:hover {
    background-color: var(--four-hundred);
  }
`;

function Menu() {
  const [dropDown, setDropdown] = useState([]);
  const [menuId, setMenuId] = useState([]);
  const [isHidden, setIsHidden] = useState("");

  function handleMouseOver(id) {
    setMenuId(id);

    //Extracting the dropdown items
    const subMenuItem = [];
    const hoveredMenu = navMenu
      .filter((el) => el.id === id)
      .map((el) =>
        el.dropdown.map((el) =>
          subMenuItem.push({ title: el.title, path: el.path })
        )
      );

    setDropdown(subMenuItem);
    setIsHidden("visible");
  }

  function handleDropdownClick(paramPath) {
    alert(paramPath);
  }

  function handleNavClick(navPath) {
    // e.stopPropagation;
    alert(navPath);
  }

  function handleMouseLeave() {
    setIsHidden("hidden");
  }

  return (
    <MenuContainer>
      {navMenu.map((el, i) => (
        <>
          <MenuItem
            key={i}
            onMouseOver={() => handleMouseOver(el.id)}
            onMouseLeave={() => setIsHidden("hidden")}
            onClick={() => handleNavClick(el.path)}
          >
            {el.title}
            {el.id === menuId && el.dropdown.length > 0 && (
              <SubItem visibility={isHidden} onMouseLeave={handleMouseLeave}>
                {dropDown.map((el, i) => (
                  <DropDown
                    key={i}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDropdownClick(el.path);
                    }}
                  >
                    {el.title}
                  </DropDown>
                ))}
              </SubItem>
            )}
            {/* {dropDown.map((el) => el.title)} */}
          </MenuItem>
        </>
      ))}
    </MenuContainer>
  );
}

export default Menu;
