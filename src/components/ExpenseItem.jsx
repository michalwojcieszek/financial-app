import { HiOutlineXCircle } from "react-icons/hi2";
import styled from "styled-components";
import { deleteExpense } from "../hooks/apiHandlers";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import Spinner from "../ui/Spinner";
import toast from "react-hot-toast";

const StyledListItem = styled.li`
  display: grid;
  grid-template-columns: auto 1fr 2fr auto auto;
  gap: 1rem;
  align-items: center;
  /* display: flex;
  justify-content: space-around;
  align-items: center; */
  background-color: white;
  border-radius: 5px;
  padding: 1rem;

  & svg {
    height: 2.5rem;
    width: 2.5rem;
    color: var(--color-blue-700);
    cursor: pointer;
  }
`;

const StyledEmojiSpan = styled.span`
  font-size: 2rem;
  justify-self: center;
`;

const StyledCostSpan = styled.span`
  color: var(--color-blue-700);
  font-weight: 600;
  justify-self: center;
`;

const StyledNoDescription = styled.span`
  color: var(--color-grey-300);
`;

const StyledDescription = styled.span`
  justify-self: center;
`;

const StyledDateSpan = styled.span`
  font-size: 1.2rem;
  justify-self: center;
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

function ExpenseItem({ expense }) {
  const [isLoading, setIsLoading] = useState("");
  const navigate = useNavigate();
  const { category, cost, description, addedOn, expenseId } = expense;
  const emoji = getEmoji(category);
  const { id, month } = useParams();

  async function handleDelete() {
    setIsLoading(true);
    await deleteExpense(id, month, expenseId);
    navigate(`/users/${id}/${month}`);
    toast.success("Expense successfully deleted");
    setIsLoading(false);
  }

  if (isLoading) return <Spinner />;

  return (
    <StyledListItem key={expenseId}>
      <StyledEmojiSpan>{emoji}</StyledEmojiSpan>
      <StyledCostSpan>$ {cost}</StyledCostSpan>
      {expense.description ? (
        <StyledDescription>{description}</StyledDescription>
      ) : (
        <StyledNoDescription>No description</StyledNoDescription>
      )}
      <StyledDateSpan>{addedOn.date}</StyledDateSpan>
      <HiOutlineXCircle onClick={handleDelete} />
    </StyledListItem>
  );
}

export default ExpenseItem;
