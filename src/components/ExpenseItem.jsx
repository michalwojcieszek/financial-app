import { HiOutlineXCircle } from "react-icons/hi2";
import styled from "styled-components";

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
  const emoji = getEmoji(expense.category);

  return (
    <StyledListItem key={expense.expenseId}>
      <StyledEmojiSpan>{emoji}</StyledEmojiSpan>
      <StyledCostSpan>$ {expense.cost}</StyledCostSpan>
      {expense.description ? (
        <StyledDescription>{expense.description}</StyledDescription>
      ) : (
        <StyledNoDescription>No description</StyledNoDescription>
      )}
      <span>{expense.addedOn.date}</span>
      <HiOutlineXCircle />
    </StyledListItem>
  );
}

export default ExpenseItem;
