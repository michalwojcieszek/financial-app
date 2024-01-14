import styled from "styled-components";
const StyledButtonUnderline = styled.button`
  border: none;
  background: none;
  color: var(--color-blue-500);
  cursor: pointer;
  font-size: 1.6rem;
  transition: background 1s;
  border-bottom: 1px solid var(--color-blue-500);
  margin-bottom: 1rem;

  &:hover {
    border-bottom: none;
  }
`;

function ButtonUnderline({ children, onClick }) {
  return (
    <StyledButtonUnderline onClick={onClick}>{children}</StyledButtonUnderline>
  );
}

export default ButtonUnderline;
