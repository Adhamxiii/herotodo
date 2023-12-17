import React from "react";
import Logo from "./Logo";
import { RxExit } from "react-icons/rx";
import styled from "styled-components";

const Header = () => {
  return (
    <StyledHeader>
      <div className="container">
        <Logo />
        <RxExit size={30} />
      </div>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  padding: 20px 0;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;

  .container {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export default Header;
