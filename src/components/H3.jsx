import styled from "styled-components";

const StyledH3 = styled.h3`
  font-size: 2.4rem;
  font-weight: 500;
  color: var(--color-blue-700);
  margin-bottom: 1rem;
`;

function H3({ children }) {
  return <StyledH3>{children}</StyledH3>;
}

export default H3;
