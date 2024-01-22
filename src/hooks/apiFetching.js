export const URL_JSON_SERVER = "http://localhost:8000/users";

export async function postData(newUser) {
  const res = await fetch(URL_JSON_SERVER, {
    method: "POST",
    body: JSON.stringify(newUser),
    headers: { "Content-Type": "application/json" },
  });
  const data = await res.json();
  console.log(data);
  return data.id;
}

export async function updateUserData(newUserData, id) {
  const res = await fetch(`${URL_JSON_SERVER}/${id}`, {
    method: "PUT",
    body: JSON.stringify(newUserData),
    headers: { "Content-Type": "application/json" },
  });
  const data = await res.json();
  return data;
}

export async function getAllUsers() {
  const res = await fetch(URL_JSON_SERVER);
  const data = await res.json();
  console.log(data);
  return data;
}

export async function getUserDataById(id) {
  const res = await fetch(URL_JSON_SERVER);
  const data = await res.json();
  const userData = data.find((user) => user.id === id);
  return userData;
}

export async function getUserExpensesById(id) {
  const { expenses } = await getUserDataById(id);
  return expenses;
}

export async function getMonthlyExpensesFromId(id, month) {
  const user = await getUserDataById(id);
  const montlyExpenses = user?.expenses?.[month];
  return montlyExpenses;
}
