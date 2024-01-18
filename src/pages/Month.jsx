import { getUserDataById } from "../hooks/apiFetching";
import AddExpenseForm from "../components/AddExpenseForm";
import MonthlyExpenses from "../components/MonthlyExpenses";
import { useLoaderData, useParams } from "react-router-dom";
import MonthlyStats from "../components/MonthStats/MonthlyStats";

function Month() {
  const user = useLoaderData();
  const { month } = useParams();
  const monthString = month[0].toUpperCase() + month.slice(1);
  const expensesThisMonth = user.expenses[month];

  return (
    <>
      <AddExpenseForm />
      <MonthlyExpenses
        expensesThisMonth={expensesThisMonth}
        monthString={monthString}
      />
      <MonthlyStats
        userData={user.userData}
        expensesThisMonth={expensesThisMonth}
        monthString={monthString}
      />
    </>
  );
}

export default Month;
