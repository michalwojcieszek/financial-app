import styled from "styled-components";
import { HiOutlineCog6Tooth } from "react-icons/hi2";
import ButtonSecondary from "./ButtonSecondary";
import { useNavigate, useParams } from "react-router-dom";
import { useApp } from "../contexts/AppContext";
import H2 from "./H2";
import ButtonWithEmojiDiv from "./ButtonWithEmojiDiv";

const StyledSelectionDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background-color: var(--color-grey-200);
  border-radius: 10px;
  gap: 1rem;
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
      <H2>Choose the period</H2>
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
        <ButtonWithEmojiDiv>
          <HiOutlineCog6Tooth />
          <span>Go to settings</span>
        </ButtonWithEmojiDiv>
      </ButtonSecondary>
    </StyledSelectionDiv>
  );
}

export default Selection;
