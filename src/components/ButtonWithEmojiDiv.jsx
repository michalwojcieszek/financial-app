import styled from "styled-components";

const StyledButtonWithEmojiDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;

  & svg {
    height: 2rem;
    width: 2rem;
    flex-grow: 1;
  }
`;

function ButtonWithEmojiDiv({ children }) {
  return <StyledButtonWithEmojiDiv>{children}</StyledButtonWithEmojiDiv>;
}

export default ButtonWithEmojiDiv;
