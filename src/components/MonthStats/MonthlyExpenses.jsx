import { useMonth } from "../../contexts/MonthContext";
import H3 from "../../ui/styledComponents/H3";
import Section from "../../ui/styledComponents/Section";
import ExpenseItem from "./ExpenseItem";
import styled from "styled-components";

const StyledExpensesList = styled.ul`
  max-height: 25rem;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  overflow-y: scroll;
  /* color: var(--color-blue-700); */
`;

const StyledHeaderOfTable = styled.div`
  display: grid;
  grid-template-columns: auto 1.7fr 1.5fr 1fr auto;
  gap: 2.5rem;
  letter-spacing: 0.02rem;
  align-items: center;
  justify-items: center;
  justify-content: center;
  padding: 1rem;
  font-size: 1rem;
  text-transform: uppercase;
  font-weight: 500;

  & > div:not(:last-child) {
    color: var(--color-blue-700);
  }

  & > div:last-child {
    color: red;
  }
`;

function MonthlyExpenses() {
  const { expensesThisMonth, monthString, currency } = useMonth();

  return (
    <Section>
      {!expensesThisMonth.length ? (
        <>
          <H3>You have no expenses yet</H3>
          <p>Add some in the form above &uarr;</p>
        </>
      ) : (
        <>
          <H3>All expenses in {monthString}</H3>
          <StyledHeaderOfTable>
            <div>category</div>
            <div>
              cost <strong>{currency}</strong>
            </div>
            <div>description</div>
            <div>added on</div>
            <div>DELETE</div>
          </StyledHeaderOfTable>
          <StyledExpensesList>
            {expensesThisMonth.map((expense) => (
              <ExpenseItem
                key={expense.expenseId}
                expense={expense}
                currency={currency}
              />
            ))}
          </StyledExpensesList>
        </>
      )}
    </Section>
  );
}

export default MonthlyExpenses;
