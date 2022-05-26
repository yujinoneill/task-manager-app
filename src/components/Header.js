import styled from "styled-components";

import { FaSearch } from "react-icons/fa";
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
    width: 100%;

    border: none;
    font-family: "Ubuntu", sans-serif;
    font-size: 18px;

    margin-left: 10px;

    &:focus {
      outline: none;
    }
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <HeadSearch>
        <FaSearch />
        <input tyype="search" placeholder="Search" />
      </HeadSearch>
      <Dropdown />
    </StyledHeader>
  );
};

export default Header;
