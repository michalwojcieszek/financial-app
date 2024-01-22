import { getAllUsers, updateUserData } from "./apiFetching";

//GET user
export async function getUserDataById(id) {
  const allUsers = await getAllUsers();
  const userData = allUsers.find((user) => user.id === id);
  return userData;
}

//GET user's TOTAL expenses
export async function getUserExpensesById(id) {
  const { expenses } = await getUserDataById(id);
  return expenses;
}

//GET user's MONTHLY expenses
export async function getMonthlyExpensesFromId(id, month) {
  const user = await getUserDataById(id);
  const montlyExpenses = user?.expenses?.[month];
  return montlyExpenses;
}

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
  const data = await updateUserData(userWithNewExpense, id);
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
  const data = await updateUserData(userWithNewExpense, id);
  return data;
}

//Changing user's income and savingsGoal
export async function changeIncomeAndLimit(id, newIncome, newLimit) {
  //getting current user's object
  const user = await getUserDataById(id);

  //refactoring user's object to have new income and savingsGoal
  const userWithNewIncomeAndLimit = {
    ...user,
    userData: {
      ...user.userData,
      income: newIncome,
      savingsGoal: newLimit,
    },
  };
  console.log(userWithNewIncomeAndLimit);

  //sending refactored user's object to API
  const data = await updateUserData(userWithNewIncomeAndLimit, id);
  return data;
}

export async function addExpenseEveryMonth(id, newExpense) {
  //Adding new expense
  const allExpenses = await getUserExpensesById(id);
  const newExpensesObj = Object.fromEntries(
    Object.entries(allExpenses).map((month) => {
      const [monthName, monthExpArr] = month;
      const newMonthExpArr = [...monthExpArr, newExpense];
      return [monthName, newMonthExpArr];
    })
  );
  console.log(newExpensesObj);

  //getting current user's object
  const user = await getUserDataById(id);

  //refactoring user's object to have new expenses
  const userWithNewExpenseEveryMonth = {
    ...user,
    expenses: newExpensesObj,
  };

  //sending refactored user's object to API
  const data = await updateUserData(userWithNewExpenseEveryMonth, id);
  return data;
}
