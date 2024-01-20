import { URL_JSON_SERVER, getUserDataById } from "./apiFetching";

//Exchanging all values
export async function exchangeUserExpenses(id, rate, newCurrency) {
  //getting current user's object
  const user = await getUserDataById(id);
  const { userData, expenses } = user;

  //new userData (income, limit, currency)
  const newUserData = {
    ...userData,
    currency: newCurrency,
    income: (userData.income * rate).toFixed(2),
    limit: (userData.limit * rate).toFixed(2),
  };

  console.log(Object.entries(expenses));

  const newExpenses = Object.fromEntries(
    Object.entries(expenses).map(([month, expensesArray]) => {
      const newExpensesArray = expensesArray.map((expense) => {
        return { ...expense, cost: (expense.cost * rate).toFixed(2) };
      });
      return [month, newExpensesArray];
    })
  );

  //refactoring user's object to have new expenses
  const userWithNewExpensesData = {
    ...user,
    userData: newUserData,
    expenses: newExpenses,
  };

  //sending refactored user's object to API
  const res = await fetch(`${URL_JSON_SERVER}/${id}`, {
    method: "PUT",
    body: JSON.stringify(userWithNewExpensesData),
    headers: { "Content-Type": "application/json" },
  });
  const data = await res.json();
  return data;
}
