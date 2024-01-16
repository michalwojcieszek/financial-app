import { getUserDataById } from "../hooks/apiFetching";
import AddExpenseForm from "../components/AddExpenseForm";
import MonthlyExpenses from "../components/MonthlyExpenses";
import { useLoaderData, useParams } from "react-router-dom";
import ExpensesChart from "../components/ExpensesChart";
import ExpensesLimit from "../components/ExpensesLimit";

function Month() {
  const user = useLoaderData();
  const { month } = useParams();
  const expensesThisMonth = user.expenses[month];

  return (
    <>
      <AddExpenseForm />
      <MonthlyExpenses expensesThisMonth={expensesThisMonth} />
      <ExpensesChart />
      <ExpensesLimit />
    </>
  );
}

export default Month;

export async function loader({ params }) {
  const userData = await getUserDataById(params.id);
  return userData;
}
