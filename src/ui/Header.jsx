import styled from "styled-components";

const StyledHeader = styled.header`
  background: var(--gradient-default);
  display: grid;
  align-items: center;
`;

const StyledH1 = styled.h1`
  font-weight: 500;
  color: white;
  margin-left: 2rem;
`;

function Header() {
  return (
    <>
      <StyledHeader>
        <StyledH1>Header</StyledH1>
      </StyledHeader>
    </>
  );
}

export default Header;
