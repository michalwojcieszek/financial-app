import styled from "styled-components";
const ButtonSecondary = styled.button`
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
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background: var(--gradient-hover);
  }
`;

export default ButtonSecondary;
