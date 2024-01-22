export const URL_JSON_SERVER = "http://localhost:8000/users";

//GET all users
export async function getAllUsers() {
  const res = await fetch(URL_JSON_SERVER);
  const data = await res.json();
  return data;
}

//POST new User
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

//PUT new user's data
export async function updateUserData(newUserData, id) {
  const res = await fetch(`${URL_JSON_SERVER}/${id}`, {
    method: "PUT",
    body: JSON.stringify(newUserData),
    headers: { "Content-Type": "application/json" },
  });
  const data = await res.json();
  return data;
}

//DELETE - whole account
export async function deleteAccount(id) {
  const res = await fetch(`${URL_JSON_SERVER}/${id}`, {
    method: "DELETE",
  });
  const data = await res.json();
  console.log(data);
  return data;
}
