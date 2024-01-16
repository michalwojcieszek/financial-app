import styled, { css } from "styled-components";

const StyledSelect = styled.select`
  ${(props) =>
    props.size === "large" &&
    css`
      padding: 1rem;
      width: 50%;
      font-size: 1.6rem;
    `}
  ${(props) =>
    props.size === "medium" &&
    css`
      padding: 0.8rem;
      width: 50%;
      font-size: 1.4rem;
    `}
      
  border: 1px solid gray;
  font-family: inherit;
  border-radius: 10px;
  appearance: none;
  background-color: white;
  color: var(--color-grey-700);
  cursor: pointer;
  text-transform: capitalize;
  text-align-last: center;
`;

export default StyledSelect;
