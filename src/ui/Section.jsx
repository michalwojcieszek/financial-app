import styled from "styled-components";

const StyledSection = styled.section`
  padding: 2rem;
  background-color: var(--color-grey-200);
  border-radius: 10px;
`;

function Section({ children }) {
  return <StyledSection>{children}</StyledSection>;
}

export default Section;
