import { useParams } from "react-router-dom";
import H3 from "./H3";
import Section from "./Section";

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
          <ul>
            {expensesThisMonth.map((expense) => (
              <li key={expense.expenseId}>
                <span>{expense.addedOn?.date}</span>
                <span>{expense.addedOn?.time}</span>
                <span>{expense.category}</span>
                <span>{expense.cost}</span>
                <span>{expense.description}</span>
              </li>
            ))}
          </ul>
        </>
      )}
    </Section>
  );
}

export default MonthlyExpenses;
