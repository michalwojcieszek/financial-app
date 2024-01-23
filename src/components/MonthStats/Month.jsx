import AddExpenseForm from "../components/monthStats/AddExpenseForm";
import MonthlyExpenses from "../components/monthStats/MonthlyExpenses";
import { useLoaderData, useParams } from "react-router-dom";
import MonthlyStats from "../components/MonthStats/MonthlyStats";

function Month() {
  //useLoaderData
  const user = useLoaderData();

  const { userData } = user;
  const { currency, income, savingsGoal } = userData;
  const numIncome = parseFloat(income);
  const numSavingsGoal = parseFloat(savingsGoal);

  const { month } = useParams();
  const monthString = month[0].toUpperCase() + month.slice(1);
  const expensesThisMonth = user.expenses[month];

  return (
    <>
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
