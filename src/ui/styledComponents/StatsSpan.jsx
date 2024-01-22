import styled from "styled-components";

const StatsSpan = styled.span`
  color: ${(props) =>
    props.color ? `var(${props.color})` : "var(--color-blue-700)"};
  font-weight: 500;
`;

export default StatsSpan;
