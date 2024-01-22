import styled from "styled-components";

const ButtonWithEmojiDiv = styled.div`
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

export default ButtonWithEmojiDiv;
