import styled from "styled-components";
import { HiOutlineCog6Tooth } from "react-icons/hi2";
import ButtonSecondary from "./ButtonSecondary";
import { useNavigate } from "react-router-dom";

const StyledSelectionDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background-color: var(--color-grey-200);
  border-radius: 10px;
  gap: 1rem;
`;

const ButtonDiv = styled.div`
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

function Selection() {
  const navigate = useNavigate();

  function changeMonth(month) {
    console.log(month);
  }

  return (
    <StyledSelectionDiv>
      <label for="select-view">Choose the period</label>
      <select
        name="months"
        id="month-select"
        onChange={(e) => changeMonth(e.target.value)}
      >
        <option value="year">Yearly statistics</option>
        <option value="january">january</option>
        <option value="february">february</option>
        <option value="march">march</option>
        <option value="april">april</option>
        <option value="may">may</option>
        <option value="june">june</option>
        <option value="july">july</option>
        <option value="august">august</option>
        <option value="september">september</option>
        <option value="october">october</option>
        <option value="november">november</option>
        <option value="december">december</option>
      </select>
      <ButtonSecondary>
        <ButtonDiv>
          <HiOutlineCog6Tooth />
          <span>Go to settings</span>
        </ButtonDiv>
      </ButtonSecondary>
    </StyledSelectionDiv>
  );
}

export default Selection;
