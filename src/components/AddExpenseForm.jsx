import H3 from "../ui/H3";
import styled from "styled-components";
import { useApp } from "../contexts/AppContext";
import Section from "../ui/Section";
import { HiOutlineCheckCircle } from "react-icons/hi2";
import ButtonWithEmojiDiv from "../ui/StyledButtonWithEmojiDiv";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import {
  addExpenseEveryMonth,
  addMonthlyExpense,
} from "../hooks/UsersDataAPI/apiHandlers";
import Spinner from "../ui/Spinner";
import StyledSelect from "../ui/StyledSelect";
import StyledInput from "../ui/StyledInput";
import StyledButtonSecondary from "../ui/StyledButtonSecondary";
import StyledStatsSpan from "../ui/StyledStatsSpan";
import { useState } from "react";

const StyledOptional = styled.span`
  color: var(--color-grey-500);
`;

const InputCheckboxDiv = styled.div`
  width: 20rem;
  flex-shrink: 0;
`;

const InputCheckbox = styled.input`
  width: 2rem;
  height: 2rem;
  border-radius: 0.5rem;
  background-color: red;
`;

const ExpenseFormRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const InputSelectDiv = styled.div`
  width: 20rem;
  flex-shrink: 0;
`;

const ExpenseForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

function AddExpenseForm({ currency }) {
  const navigate = useNavigate();
  const { id, month } = useParams();
  const {
    category,
    setCategory,
    cost,
    setCost,
    description,
    setDescription,
    setIsLoading,
    isLoading,
  } = useApp();

  const [isRecurring, setIsRecurring] = useState(false);

  function resetAddExpenseFields() {
    setCategory("");
    setCost("");
    setDescription("");
    setIsRecurring(false);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!category || !cost) {
      toast.error("Category and cost of the expense must be filled");
      return;
    }
    const newExpense = {
      expenseId: new Date(),
      addedOn: {
        date: new Date().toLocaleDateString(),
        time: new Date().toLocaleTimeString([], {
          hour: "numeric",
          minute: "numeric",
        }),
      },
      category,
      cost,
      description,
    };
    setIsLoading(true);
    if (isRecurring) {
      console.log(`checked`);
      await addExpenseEveryMonth(id, newExpense);
    }

    if (!isRecurring) {
      console.log(`NOT checked`);
      await addMonthlyExpense(id, month, newExpense);
    }

    resetAddExpenseFields();
    setIsLoading(false);
    //HERE I WANT TO RE-RENDER MONTH COMPONENT
    navigate(`/users/${id}/${month}`);
    toast.success("Expense has been added successfully");
  }

  if (isLoading) return <Spinner />;

  return (
    <Section>
      <H3>Adding a new expense</H3>
      <ExpenseForm onSubmit={handleSubmit}>
        <ExpenseFormRow>
          <label>Expense category</label>
          <InputSelectDiv>
            <StyledSelect
              size="medium"
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
            </StyledSelect>
          </InputSelectDiv>
        </ExpenseFormRow>
        <ExpenseFormRow>
          <label>
            Expense in <StyledStatsSpan>{currency}</StyledStatsSpan>
          </label>
          <InputSelectDiv>
            <StyledInput
              size="medium"
              type="number"
              name="cost"
              value={cost}
              onChange={(e) => setCost(e.target.value)}
            />
          </InputSelectDiv>
        </ExpenseFormRow>
        <ExpenseFormRow>
          <label>
            Description <StyledOptional>(optional)</StyledOptional>
          </label>
          <InputSelectDiv>
            <StyledInput
              size="medium"
              type="text"
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </InputSelectDiv>
        </ExpenseFormRow>
        <ExpenseFormRow>
          <label>Add expense to every month</label>
          <InputCheckboxDiv>
            <InputCheckbox
              type="checkbox"
              value={isRecurring}
              onChange={(e) => setIsRecurring(e.target.checked)}
            />
          </InputCheckboxDiv>
        </ExpenseFormRow>

        <div>
          <StyledButtonSecondary>
            <ButtonWithEmojiDiv>
              <HiOutlineCheckCircle />
              <span>Add Expense</span>
            </ButtonWithEmojiDiv>
          </StyledButtonSecondary>
        </div>
      </ExpenseForm>
    </Section>
  );
}

export default AddExpenseForm;
