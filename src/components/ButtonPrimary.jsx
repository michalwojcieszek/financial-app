import styled from "styled-components";
const StyledButtonPrimary = styled.button`
  border: none;
  background: var(--gradient-default);
  color: white;
  text-transform: uppercase;
  cursor: pointer;
  border-radius: 10px;
  font-size: 2rem;
  padding: 1rem 2rem;
  transition: background 1s;

  &:hover {
    background: var(--gradient-hover);
  }
`;

function Button({ children }) {
  return <StyledButtonPrimary>{children}</StyledButtonPrimary>;
}

export default Button;
