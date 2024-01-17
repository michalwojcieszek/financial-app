import styled from "styled-components";

const StyledSection = styled.section`
  padding: 2rem;
  background-color: white;
  box-shadow: 0 0px 32px rgb(0, 0, 0, 0.07);
  border-radius: 10px;
`;

function Section({ children }) {
  return <StyledSection>{children}</StyledSection>;
}

export default Section;
