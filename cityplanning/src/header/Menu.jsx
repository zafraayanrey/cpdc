import React, { useState } from "react";
import styled from "styled-components";
import "../index.css";
import { menus } from "../utils/menus";
import Body from "../Body";
import { useDispatch, useSelector } from "react-redux";
import { home } from "../slice/menuSlice";

const MenuContainer = styled.div`
  display: grid;
  place-content: center;
  grid-template-columns: repeat(6, 1fr);
`;

const MenuItem = styled.div`
  background-color: var(--one-hundred);
  padding: 10px;
  font-weight: bold;
  position: relative;

  &:hover {
    background-color: var(--four-hundred);
    cursor: pointer;
    color: var(--seven-hundred);
  }
`;

const DropDownContainer = styled.div`
  height: auto;
  display: grid;
  width: auto;
  grid-template-rows: repeat(1fr, 3);
  position: absolute;
  top: 40px;
  left: 0px;
  visibility: ${(props) => props.visibility};
  z-index: 1;
`;

const DropDown = styled.div`
  background-color: var(--two-hundred);
  color: var(--nine-hundred-fifty);
  width: 250px;
  height: auto;
  padding: 10px;

  &:hover {
    background-color: var(--four-hundred);
    cursor: pointer;
    color: var(--seven-hundred);
  }
`;

function Menu() {
  const [isHidden, setIsHidden] = useState("hidden");
  const [subMenu, setSubMenu] = useState([]);
  const [menuId, setMenuId] = useState();
  const dispatch = useDispatch();

  function handleDropdown(id, data) {
    setIsHidden("visible");
    setSubMenu(data);
    setMenuId(id);
  }

  function subItem() {
    return (
      isHidden === "visible" && (
        <DropDownContainer>
          {subMenu.map((el, i) => (
            <DropDown
              visibility={isHidden}
              onMouseLeave={() => setIsHidden("hidden")}
              onClick={() => alert("gwapo ko")}
              key={i}
            >
              {el}
            </DropDown>
          ))}
        </DropDownContainer>
      )
    );
  }

  return (
    <>
      <MenuContainer>
        {menus.map((el, i) => (
          <MenuItem
            key={i}
            onMouseOver={() => handleDropdown(el.id, el.subMenu)}
            onClick={() => dispatch(home(el.id))}
          >
            <span>{el.menu}</span>
            {el.id === menuId && subItem()}
          </MenuItem>
        ))}
      </MenuContainer>
    </>
  );
}

export default Menu;
