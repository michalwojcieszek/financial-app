import {
  getUserDataById,
  getUserExpensesById,
  updateUserData,
} from "./apiFetching";

export default async function addExpenseEveryMonth(id, newExpense) {
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
