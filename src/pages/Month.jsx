import { getUserDataLoader } from "../hooks/apiFetching";
import AddExpenseForm from "../components/AddExpenseForm";
import MonthlyExpenses from "../components/MonthlyExpenses";
import { useLoaderData, useParams } from "react-router-dom";

function Month() {
  const user = useLoaderData();
  const { month } = useParams();
  const expensesThisMonth = user.expenses[month];

  return (
    <>
      <AddExpenseForm />
      <MonthlyExpenses expensesThisMonth={expensesThisMonth} />
    </>
  );
}

export default Month;

export async function loader({ params }) {
  const userData = await getUserDataLoader(params.id);
  return userData;
}
