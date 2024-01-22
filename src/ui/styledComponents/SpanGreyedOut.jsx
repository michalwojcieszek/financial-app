import styled, { css } from "styled-components";

const SpanGreyedOut = styled.span`
  color: var(--color-grey-500);
  ${(props) =>
    props.size === "small" &&
    css`
      font-size: 1.2rem;
    `}/* ${(props) =>
    props.size === "medium" &&
    css`
      font-size: 1.6rem;
    `} */
`;

export default SpanGreyedOut;
