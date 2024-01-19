import styled from "styled-components";
const StyledButtonSecondary = styled.button`
  border: none;
  background: var(--gradient-default);
  color: white;
  text-transform: uppercase;
  cursor: pointer;
  border-radius: 10px;
  font-size: 1rem;
  padding: 0.5rem 1.2rem;
  transition: background 1s;
  letter-spacing: 1px;
  font-family: inherit;

  &:hover {
    background: var(--gradient-hover);
  }
`;

export default StyledButtonSecondary;