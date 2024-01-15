import styled from "styled-components";
import { HiOutlineCog6Tooth } from "react-icons/hi2";
import ButtonSecondary from "./ButtonSecondary";
import { useNavigate, useParams } from "react-router-dom";
import { useApp } from "../contexts/AppContext";

const StyledSelectionDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background-color: var(--color-grey-200);
  border-radius: 10px;
  gap: 1rem;
  margin-bottom: 2rem;
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
  const { setCategory, setCost, setDescription } = useApp();
  const navigate = useNavigate();
  const { id } = useParams();

  function clearInputs() {
    setCategory("");
    setCost("");
    setDescription("");
  }

  function changeMonth(month) {
    clearInputs();
    if (month === "year") {
      navigate(`/users/${id}`);
      return;
    }
    navigate(`/users/${id}/${month}`);
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
