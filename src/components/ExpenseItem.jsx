import { HiOutlineXCircle } from "react-icons/hi2";
import styled from "styled-components";
import { deleteExpense } from "../hooks/usersDataAPI/apiHandlers";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";
import { useGlobal } from "../contexts/GlobalContext";

const StyledListItem = styled.li`
  display: grid;
  grid-template-columns: 1fr 1fr 1.5fr 1fr auto;
  gap: 1rem;
  align-items: center;
  justify-items: center;
  border-radius: 5px;
  padding: 1rem;
  background-color: var(--color-grey-100);
  /* box-shadow: 0 0px 32px rgb(0, 0, 0, 0.12); */

  & svg {
    height: 2.5rem;
    width: 2.5rem;
    color: var(--color-blue-700);
    cursor: pointer;
  }
`;

const StyledEmojiSpan = styled.span`
  font-size: 2rem;
`;

const StyledCostSpan = styled.span`
  color: var(--color-blue-700);
  font-weight: 600;
`;

const StyledNoDescription = styled.span`
  color: var(--color-grey-300);
`;

const StyledDescription = styled.span``;

const StyledDateSpan = styled.span`
  font-size: 1.2rem;
`;

function getEmoji(text) {
  switch (text) {
    case "food":
      return "🥕";
    case "education":
      return "🎓";
    case "insurance":
      return "🏥";
    case "medicines":
      return "💊";
    case "subscription":
      return "💳";
    case "party":
      return "🥳";
    case "housing":
      return "🏠";
    case "doctors":
      return "🩺";
    case "gadgets":
      return "🎧";
    case "gift":
      return "🎁";
    case "fuel":
      return "⛽";
    case "car":
      return "🚗";
    case "entertainment":
      return "🍿";
    case "restaurant":
      return "🍽️";
    case "clothes":
      return "👕";
    case "commuting":
      return "🚈";
    default:
      return "❓";
  }
}

function ExpenseItem({ expense, currency }) {
  const { loading, notLoading } = useGlobal();
  const navigate = useNavigate();
  const { category, cost, description, addedOn, expenseId } = expense;
  const emoji = getEmoji(category);
  const { id, month } = useParams();

  async function handleDelete() {
    loading();
    await deleteExpense(id, month, expenseId);
    navigate(`/users/${id}/${month}`);
    toast.success("Expense successfully deleted");
    notLoading();
  }

  return (
    <StyledListItem key={expenseId}>
      <StyledEmojiSpan>{emoji}</StyledEmojiSpan>
      <StyledCostSpan>{cost}</StyledCostSpan>
      {expense.description ? (
        <StyledDescription>{description}</StyledDescription>
      ) : (
        <StyledNoDescription>No description</StyledNoDescription>
      )}
      <StyledDateSpan>{addedOn.date}</StyledDateSpan>
      <HiOutlineXCircle
        style={{ color: "var(--color-red-700)" }}
        onClick={handleDelete}
      />
    </StyledListItem>
  );
}

export default ExpenseItem;
