import {
  URL_JSON_SERVER,
  getMonthlyExpensesFromId,
  getUserDataLoader,
} from "./apiFetching";

//Editing existing user's expense based on form - AddExpenseForm
export async function addMonthlyExpense(id, month, newExpense) {
  //creating new expenses array
  const monthlyExpenses = await getMonthlyExpensesFromId(id, month);
  const newMonthlyExpenses = [...monthlyExpenses, newExpense];

  //getting current user's object
  const user = await getUserDataLoader(id);

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

//Editing existing user's expense based on form - AddExpenseForm
export async function deleteExpense(id, month, expenseId) {
  //creating new expenses array without the one with expenseId ===
  const monthlyExpenses = await getMonthlyExpensesFromId(id, month);
  console.log(monthlyExpenses);
  const newMonthlyExpenses = monthlyExpenses.filter(
    (expense) => expense.expenseId !== expenseId
  );
  console.log(newMonthlyExpenses);

  // //getting current user's object
  const user = await getUserDataLoader(id);

  // //refactoring user's object to have new expenses
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
