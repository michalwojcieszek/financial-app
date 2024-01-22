import AddExpenseForm from "../components/AddExpenseForm";
import MonthlyExpenses from "../components/MonthlyExpenses";
import { useLoaderData, useParams } from "react-router-dom";
import MonthlyStats from "../components/MonthStats/MonthlyStats";
import Selection from "../components/Selection";

function Month() {
  const user = useLoaderData();
  const { currency, income, savingsGoal } = user.userData;
  const numIncome = parseFloat(income);
  const numSavingsGoal = parseFloat(savingsGoal);

  const { month } = useParams();
  const monthString = month[0].toUpperCase() + month.slice(1);
  const expensesThisMonth = user.expenses[month];

  return (
    <>
      <Selection />
      <AddExpenseForm currency={currency} />
      <MonthlyExpenses
        expensesThisMonth={expensesThisMonth}
        monthString={monthString}
        currency={currency}
      />
      <MonthlyStats
        income={numIncome}
        savingsGoal={numSavingsGoal}
        userData={user.userData}
        expensesThisMonth={expensesThisMonth}
        monthString={monthString}
        currency={currency}
      />
    </>
  );
}

export default Month;
