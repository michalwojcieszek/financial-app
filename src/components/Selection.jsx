import styled from "styled-components";
import { HiOutlineCog6Tooth } from "react-icons/hi2";
import { useNavigate, useParams } from "react-router-dom";
import H2 from "../ui/styledComponents/H2";
import ButtonWithEmojiDiv from "../ui/styledComponents/ButtonWithEmojiDiv";
import Select from "../ui/styledComponents/Select";
import ButtonSecondary from "../ui/styledComponents/ButtonSecondary";
import { useEffect } from "react";
import { useGlobal } from "../contexts/GlobalContext";
import { useAddExpense } from "../contexts/AddExpenseContext";

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
  const { clearAll } = useAddExpense();
  const { setCurrentMonth, currentMonth } = useGlobal();

  const navigate = useNavigate();
  const { id, month } = useParams();

  function handleGoToSettings() {
    navigate(`/users/${id}/settings`);
  }

  function changeMonth(selectionValue) {
    if (selectionValue === "year") {
      navigate(`/users/${id}`);
      // setCurrentMonth(selectionValue);
      return;
    }
    navigate(`/users/${id}/${selectionValue}`);
    // setCurrentMonth(selectionValue);
    clearAll();
  }

  //reading URL to set appropriate Select value
  useEffect(
    function () {
      if (month !== currentMonth) {
        if (!month) setCurrentMonth("year");
        if (month) setCurrentMonth(month);
      }
    },
    [month, currentMonth]
  );

  return (
    <SelectionDiv>
      <H2>Choose the period</H2>
      <Select
        size="large"
        name="months"
        id="month-select"
        value={currentMonth}
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
