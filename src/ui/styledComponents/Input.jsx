import styled, { css } from "styled-components";

const Input = styled.input`
  ${(props) =>
    props.size === "large" &&
    css`
      height: 3rem;
      padding: 1.8rem 1.2rem;
      font-size: 1.6rem;
    `}

  ${(props) =>
    props.size === "medium" &&
    css`
      height: 3rem;
      padding: 0.4rem 0.8rem;
      font-size: 1.4rem;
      width: 100%;
    `}
    
  border-radius: 10px;
  border: 1px solid gray;
  font-family: inherit;
`;

export default Input;
