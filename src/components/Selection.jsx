import styled from "styled-components";
import { HiOutlineCog6Tooth } from "react-icons/hi2";
import { useNavigate, useParams } from "react-router-dom";
import { useApp } from "../contexts/AppContext";
import H2 from "../ui/styledComponents/H2";
import ButtonWithEmojiDiv from "../ui/styledComponents/ButtonWithEmojiDiv";
import Select from "../ui/styledComponents/Select";
import ButtonSecondary from "../ui/styledComponents/ButtonSecondary";

const SelectionDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background-color: white;
  box-shadow: 0 0px 32px rgb(0, 0, 0, 0.07);
  border-radius: 10px;
  gap: 1rem;
`;

function Selection() {
  const { setCategory, setCost, setDescription } = useApp();
  const navigate = useNavigate();
  const { id } = useParams();

  function handleGoToSettings() {
    navigate(`/users/${id}/settings`);
  }

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
    <SelectionDiv>
      <H2>Choose the period</H2>
      <Select
        size="large"
        name="months"
        id="month-select"
        onChange={(e) => changeMonth(e.target.value)}
      >
        <option value="year">YEARLY STATS</option>
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
      </Select>
      <ButtonSecondary onClick={handleGoToSettings}>
        <ButtonWithEmojiDiv>
          <HiOutlineCog6Tooth />
          <span>Go to settings</span>
        </ButtonWithEmojiDiv>
      </ButtonSecondary>
    </SelectionDiv>
  );
}

export default Selection;
