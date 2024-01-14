import styled from "styled-components";

const StyledFormRow = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
`;

function FormRow({ children }) {
  return <StyledFormRow>{children}</StyledFormRow>;
}

export default FormRow;
