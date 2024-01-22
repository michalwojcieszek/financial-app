import styled from "styled-components";

const StyledH2 = styled.h2`
  font-size: 2.4rem;
  font-weight: 500;
  color: var(--color-blue-700);
  margin-bottom: 1rem;
`;

function H2({ children }) {
  return <StyledH2>{children}</StyledH2>;
}

export default H2;
