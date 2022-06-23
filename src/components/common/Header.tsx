import styled from "styled-components";
import { FaSearch } from "react-icons/fa";

import Dropdown from "../style/Dropdown.js";

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
    font-size: 14px;

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
        <form action="https://www.google.com/search" method="get">
          <input type="search" name="q" placeholder="Search in Google" />
        </form>
      </HeadSearch>
      <Dropdown />
    </StyledHeader>
  );
};

export default Header;
