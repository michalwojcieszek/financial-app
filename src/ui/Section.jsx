import styled, { css } from "styled-components";

const Section = styled.section`
  ${(props) =>
    props.type === "flex" &&
    css`
      display: flex;
      flex-direction: column;
      gap: 2rem;
    `}

  padding: 2rem;
  background-color: white;
  box-shadow: 0 0px 32px rgb(0, 0, 0, 0.07);
  border-radius: 10px;
`;

export default Section;
