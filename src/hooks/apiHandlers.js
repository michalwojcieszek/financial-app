import {
  URL_JSON_SERVER,
  getMonthlyExpensesFromId,
  getUserDataLoader,
} from "./apiFetching";

//Editing existing user's expense based on form - AddExpenseForm
export async function addMonthlyExpense(id, month, newExpense) {
  console.log(month);
  //creating new expenses array
  const monthlyExpenses = await getMonthlyExpensesFromId(id, month);
  console.log(monthlyExpenses);
  const newMonthlyExpenses = [...monthlyExpenses, newExpense];
  console.log(newMonthlyExpenses);

  //getting current user's object
  const user = await getUserDataLoader(id);
  console.log(user);

  //refactoring user's object to have new expenses
  const userWithNewExpense = {
    ...user,
    expenses: { ...user.expenses, [month]: newMonthlyExpenses },
  };
  console.log(userWithNewExpense);

  //sending refactored user's object to API
  const res = await fetch(`${URL_JSON_SERVER}/${id}`, {
    method: "PUT",
    body: JSON.stringify(userWithNewExpense),
    headers: { "Content-Type": "application/json" },
  });
  const data = res.json();
  return data;
}
