import FormDiv from "./FormDiv";
import H3 from "./H3";
import styled from "styled-components";
import { useApp } from "../contexts/AppContext";

const ExpenseFormRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ExpenseFormAllRows = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

// const ExpenseFormInput

function AddExpenseForm() {
  const { category, setCategory, cost, setCost, description, setDescription } =
    useApp();

  return (
    <FormDiv>
      <H3>Add Expense</H3>
      <ExpenseFormAllRows>
        <ExpenseFormRow>
          <label>Expense category</label>
          <select
            name="expense-category"
            id="expense-category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">⬇️ SELECT A CATEGORY</option>
            <option value="food">🥕 food</option>
            <option value="education">🎓 education</option>
            <option value="insurance">🏥 insurance</option>
            <option value="medicines">💊 medicines</option>
            <option value="subscription">💳 subscription</option>
            <option value="party">🥳 party</option>
            <option value="housing">🏠 housing fees</option>
            <option value="doctors">🩺 doctors</option>
            <option value="gadgets">🎧 gadgets</option>
            <option value="gift">🎁 gift</option>
            <option value="fuel">⛽ fuel</option>
            <option value="car">🚗 car</option>
            <option value="entertainment">🍿 entertainment</option>
            <option value="restaurant">🍽️ restaurant</option>
            <option value="clothes">👕 clothes</option>
            <option value="commuting">🚈 commuting</option>
            <option value="others">❓ others</option>
          </select>
        </ExpenseFormRow>
        <ExpenseFormRow>
          <label>Expense in $</label>
          <input
            type="number"
            value={cost}
            onChange={(e) => setCost(e.target.value)}
          />
        </ExpenseFormRow>
        <ExpenseFormRow>
          <label>Description (optional)</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </ExpenseFormRow>
      </ExpenseFormAllRows>
    </FormDiv>
  );
}

export default AddExpenseForm;
