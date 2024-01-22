import styled from "styled-components";
const ButtonUnderline = styled.button`
  border: none;
  background: none;
  color: var(--color-blue-500);
  cursor: pointer;
  font-size: 1.6rem;
  transition: background 1s;
  border-bottom: 1px solid var(--color-blue-500);
  margin-bottom: 3rem;

  &:hover {
    border-bottom: none;
    margin-bottom: 3.1rem;
  }
`;

export default ButtonUnderline;
