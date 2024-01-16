import { useParams } from "react-router-dom";
import H3 from "../ui/H3";
import Section from "../ui/Section";
import ExpenseItem from "./ExpenseItem";
import styled from "styled-components";

const StyledExpensesList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  overflow-y: scroll;
  max-height: 25rem;

  /* color: var(--color-blue-700); */
`;

function MonthlyExpenses({ expensesThisMonth }) {
  const { month } = useParams();
  console.log(expensesThisMonth);

  return (
    <Section>
      {!expensesThisMonth.length ? (
        <>
          <H3>You have no expenses yet</H3>
          <p>Add some in the form above &uarr;</p>
        </>
      ) : (
        <>
          <H3>All expenses in {month}</H3>
          <StyledExpensesList>
            {expensesThisMonth.map((expense) => (
              <ExpenseItem key={expense.expenseId} expense={expense} />
            ))}
          </StyledExpensesList>
        </>
      )}
    </Section>
  );
}

export default MonthlyExpenses;
