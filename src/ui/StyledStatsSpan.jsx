import styled from "styled-components";

const StyledStatsSpan = styled.span`
  color: ${(props) =>
    props.color ? `var(${props.color})` : "var(--color-blue-700)"};
  font-weight: 600;
`;

export default StyledStatsSpan;
