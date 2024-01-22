import {
  URL_JSON_SERVER,
  getMonthlyExpensesFromId,
  getUserDataById,
} from "./apiFetching";

//Adding new expense
export async function addMonthlyExpense(id, month, newExpense) {
  //creating new expenses array
  const monthlyExpenses = await getMonthlyExpensesFromId(id, month);
  const newMonthlyExpenses = [...monthlyExpenses, newExpense];

  //getting current user's object
  const user = await getUserDataById(id);

  //refactoring user's object to have new expenses
  const userWithNewExpense = {
    ...user,
    expenses: { ...user.expenses, [month]: newMonthlyExpenses },
  };
  //sending refactored user's object to API
  const res = await fetch(`${URL_JSON_SERVER}/${id}`, {
    method: "PUT",
    body: JSON.stringify(userWithNewExpense),
    headers: { "Content-Type": "application/json" },
  });
  const data = await res.json();
  return data;
}

//Deleting existing user's expense based on delete from ExpenseItem
export async function deleteExpense(id, month, expenseId) {
  //creating new expenses array without the one with expenseId ===
  const monthlyExpenses = await getMonthlyExpensesFromId(id, month);
  console.log(monthlyExpenses);
  const newMonthlyExpenses = monthlyExpenses.filter(
    (expense) => expense.expenseId !== expenseId
  );
  console.log(newMonthlyExpenses);

  //getting current user's object
  const user = await getUserDataById(id);

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

//Changing user's income and limit
export async function changeIncomeAndLimit(id, newIncome, newLimit) {
  //getting current user's object
  const user = await getUserDataById(id);

  //refactoring user's object to have new income and limit
  const userWithNewIncomeAndLimit = {
    ...user,
    userData: {
      ...user.userData,
      income: newIncome,
      limit: newLimit,
    },
  };
  console.log(userWithNewIncomeAndLimit);

  //sending refactored user's object to API
  const res = await fetch(`${URL_JSON_SERVER}/${id}`, {
    method: "PUT",
    body: JSON.stringify(userWithNewIncomeAndLimit),
    headers: { "Content-Type": "application/json" },
  });
  const data = await res.json();
  console.log(data);
  return data;
}

//Deleting whole account
export async function deleteAccount(id) {
  const res = await fetch(`${URL_JSON_SERVER}/${id}`, {
    method: "DELETE",
  });
  const data = await res.json();
  console.log(data);
  return data;
}
