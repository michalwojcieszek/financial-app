import H3 from "./H3";
import styled from "styled-components";
import { useApp } from "../contexts/AppContext";
import Section from "./Section";
import ButtonSecondary from "./ButtonSecondary";
import { HiOutlineCheckCircle } from "react-icons/hi2";
import ButtonWithEmojiDiv from "./ButtonWithEmojiDiv";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import { addMonthlyExpense } from "../hooks/apiHandlers";
import Spinner from "./Spinner";
import StyledSelect from "./StyledSelect";

const ExpenseFormRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ExpenseForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

function AddExpenseForm() {
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

  function resetAddExpenseFields() {
    setCategory("");
    setCost("");
    setDescription("");
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
    const newMonthlyExpenses = await addMonthlyExpense(id, month, newExpense);
    console.log(newMonthlyExpenses);
    resetAddExpenseFields();
    //HERE I WANT TO RE-RENDER MONTH COMPONENT
    setIsLoading(false);
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
        </ExpenseFormRow>
        <ExpenseFormRow>
          <label>Expense in $</label>
          <input
            type="number"
            name="cost"
            value={cost}
            onChange={(e) => setCost(e.target.value)}
          />
        </ExpenseFormRow>
        <ExpenseFormRow>
          <label>Description (optional)</label>
          <input
            type="text"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </ExpenseFormRow>
        <div>
          <ButtonSecondary>
            <ButtonWithEmojiDiv>
              <HiOutlineCheckCircle />
              <span>Add Expense</span>
            </ButtonWithEmojiDiv>
          </ButtonSecondary>
        </div>
      </ExpenseForm>
    </Section>
  );
}

export default AddExpenseForm;
