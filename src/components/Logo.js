import React from "react";
import styled from "styled-components";

const Logo = () => {
  return (
    <div className="logo">
      <LogoText>
        Hero<span>Todo</span>
      </LogoText>
    </div>
  );
};

const LogoText = styled.h1`
  font-size: 3rem;
  color: var(--primaryColor);
  margin: 10px;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  

  span {
    color: var(--secondaryColor);
  }

  @media (max-width: 600px) {
    font-size: 2rem;
  }
`;

export default Logo;
