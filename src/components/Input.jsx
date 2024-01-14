import styled from "styled-components";

const StyledInput = styled.input`
  border: 1px solid gray;
  height: 3rem;
  border-radius: 10px;
  padding: 0.8rem 1.2rem;
`;

function Input({ type, value, onChange }) {
  return <StyledInput type={type} value={value} onChange={onChange} />;
}

export default Input;
