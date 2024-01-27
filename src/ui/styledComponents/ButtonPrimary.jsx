import styled from "styled-components";
const ButtonPrimary = styled.button`
  border: none;
  background: var(--gradient-default);
  color: white;
  text-transform: uppercase;
  cursor: pointer;
  border-radius: 10px;
  font-size: 2rem;
  padding: 1rem 2rem;
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

export default ButtonPrimary;
