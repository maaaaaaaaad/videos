import React from "react";
import styled from "styled-components";
import theme from "../../../mediaQuery";

const NaviSearch = () => {
  return (
    <SearchForm>
      <SearchInputText theme={theme} type="text" placeholder="...Search" />
    </SearchForm>
  );
};

const SearchForm = styled.form``;
const SearchInputText = styled.input`
  width: 200px;
  border: 1px solid #807c7c;
  border-radius: 5px;
  outline: none;
  @media ${({ theme }) => theme.device.mobile} {
    width: 120px;
    font-size: 12px;
  }
`;

export default NaviSearch;
