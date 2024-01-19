import { URL_JSON_SERVER, getUserDataById } from "./apiFetching";

//Exchanging all values
export async function exchangeUserExpenses(id, rate, newCurrency) {
  //getting current user's object
  const user = await getUserDataById(id);
  console.log(user);
  const { userData, expenses } = user;
  console.log(id);

  //new userData (income, limit, currency)
  const newUserData = {
    ...userData,
    currency: newCurrency,
    income: userData.income * rate,
    limit: userData.limit * rate,
  };

  const newExpenses = Object.entries(expenses);
  console.log(newExpenses);

  console.log(newUserData);

  //   //refactoring user's object to have new expenses
  //   const userWithNewExpense = {
  //     ...user,
  //     expenses: { ...user.expenses, [month]: newMonthlyExpenses },
  //   };
  //   console.log(userWithNewExpense);

  //   //sending refactored user's object to API
  //   const res = await fetch(`${URL_JSON_SERVER}/${id}`, {
  //     method: "PUT",
  //     body: JSON.stringify(userWithNewExpense),
  //     headers: { "Content-Type": "application/json" },
  //   });
  //   const data = await res.json();
  //   return data;
}
