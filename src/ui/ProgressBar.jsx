import styled from "styled-components";

const StyledProgressBarDiv = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 5px;
  background-color: var(--color-grey-300);
  width: 100%;
  height: 2.5rem;
`;

function ProgressBar({ filled, color }) {
  return (
    <div>
      <StyledProgressBarDiv>
        <div
          style={{
            height: "100%",
            width: `${filled}%`,
            backgroundColor: `var(${color})`,
            transition: "all 3s",
          }}
        ></div>
        <span>{filled} %</span>
      </StyledProgressBarDiv>
    </div>
  );
}

export default ProgressBar;
