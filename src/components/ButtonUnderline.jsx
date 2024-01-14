import styled from "styled-components";
const StyledButtonUnderline = styled.button`
  border: none;
  text-decoration: underline;
  color: var(--color-blue-500);
  cursor: pointer;
  font-size: 2rem;
  padding: 1rem 2rem;
  transition: background 1s;

  &:hover {
    background: var(--gradient-hover);
  }
`;

function ButtonUnderline({ children }) {
  return <StyledButtonUnderline>{children}</StyledButtonUnderline>;
}

export default ButtonUnderline;
