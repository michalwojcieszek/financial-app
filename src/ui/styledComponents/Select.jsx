import styled, { css } from "styled-components";

const Select = styled.select`
  ${(props) =>
    props.size === "large" &&
    css`
      padding: 1rem;
      width: 80%;
      font-size: 1.6rem;
    `}

  ${(props) =>
    props.size === "medium" &&
    css`
      padding: 0.8rem;
      font-size: 1.4rem;
      width: 100%;
    `}
      
  border: 1px solid gray;
  font-family: inherit;
  border-radius: 10px;
  background-color: white;
  color: var(--color-grey-700);
  cursor: pointer;
  text-transform: capitalize;
  text-align-last: center;
`;

export default Select;
