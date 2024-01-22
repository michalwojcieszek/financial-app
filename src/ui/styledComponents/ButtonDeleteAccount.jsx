import styled from "styled-components";
const ButtonDeleteAccount = styled.button`
  border: none;
  background: var(--gradient-red-default);
  color: white;
  text-transform: uppercase;
  cursor: pointer;
  border-radius: 10px;
  font-size: 1rem;
  padding: 1.2rem 1.2rem;
  transition: background 1s;
  letter-spacing: 1px;
  align-items: center;

  &:hover {
    background: var(--gradient-red-hover);
  }

  /* &:focus {
    outline: 2px solid var(--color-red-400);
  } */
`;

export default ButtonDeleteAccount;
