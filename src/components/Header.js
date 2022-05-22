import styled from "styled-components";

import { FaSearch, FaBars } from "react-icons/fa";
import Dropdown from ".//Dropdown";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 10px;
  background-color: white;
  border-radius: 5px;

  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.15);

  color: #274c77;
`;

const HeadSearch = styled.div`
  display: flex;
  align-items: center;

  input {
    border: none;
    font-family: "Ubuntu", sans-serif;
    font-size: 18px;

    margin-left: 10px;

    &:focus {
      outline: none;
    }
  }
`;

const ToggleButton = styled.button`
  background-color: transparent;
  border: none;

  cursor: pointer;
  margin-right: 10px;

  display: none;

  @media screen and (max-width: 768px) {
    display: block;
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <HeadSearch>
        <ToggleButton>
          <FaBars />
        </ToggleButton>
        <FaSearch />
        <input type="search" placeholder="Search" />
      </HeadSearch>
      <Dropdown />
    </StyledHeader>
  );
};

export default Header;
