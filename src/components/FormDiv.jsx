import styled from "styled-components";

const StyledDiv = styled.div`
  padding: 2rem;
  background-color: var(--color-grey-200);
  border-radius: 10px;
`;

function FormDiv({ children }) {
  return <StyledDiv>{children}</StyledDiv>;
}

export default FormDiv;
