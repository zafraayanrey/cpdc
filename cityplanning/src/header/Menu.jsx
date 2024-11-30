import React, { useState } from "react";
import "../index.css";
import { navMenu } from "../utils/navMenu";
import styled from "styled-components";
import { IoMdArrowDropdown } from "react-icons/io";

const MenuContainer = styled.ul`
  display: grid;
  height: auto;
  grid-template-columns: repeat(${navMenu.length}, 1fr);
  font-size: 14px;
`;

const MenuItem = styled.li`
  list-style-type: none;
  place-content: center;
  height: auto;
  font-weight: 500;
  position: relative;
  cursor: pointer;

  &:hover {
    background-color: var(--four-hundred);
  }
`;

const SubItem = styled.div`
  visibility: ${(props) => props.visibility};
  width: 100px;
  height: 25px;
  background-color: var(--two-hundred);
  position: absolute;
  top: 100%;
  bottom: 0;
  z-index: 99;

  &:hover {
    background-color: var(--four-hundred);
  }
`;

const DropDown = styled.div`
  width: 200px;
  height: auto;
  background-color: var(--two-hundred);
  place-content: center;
  padding: 10px;

  &:hover {
    background-color: var(--four-hundred);
  }
`;

const DropdownIcon = styled.span`
  margin-left: 5px;
  text-align: center;
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
            {el.dropdown.length > 0 && (
              <DropdownIcon>
                <IoMdArrowDropdown />
              </DropdownIcon>
            )}
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
          </MenuItem>
        </>
      ))}
    </MenuContainer>
  );
}

export default Menu;
