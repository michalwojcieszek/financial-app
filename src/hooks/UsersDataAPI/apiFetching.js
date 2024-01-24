export const URL_JSON_SERVER = "http://localhost:8000/users";

//GET all users
export async function getAllUsers() {
  try {
    const res = await fetch(URL_JSON_SERVER);
    if (!res.ok) throw Error();
    const data = await res.json();
    return data;
  } catch {
    throw Error(`Failed getting to user's database`);
  }
}

//POST new User
export async function postData(newUser) {
  try {
    const res = await fetch(URL_JSON_SERVER, {
      method: "POST",
      body: JSON.stringify(newUser),
      headers: { "Content-Type": "application/json" },
    });
    if (!res.ok) throw Error();

    const data = await res.json();
    console.log(data);
    return data.id;
  } catch {
    throw Error(`Failed creating a new user`);
  }
}

//PUT new user's data
export async function updateUserData(newUserData, id) {
  try {
    const res = await fetch(`${URL_JSON_SERVER}/${id}`, {
      method: "PUT",
      body: JSON.stringify(newUserData),
      headers: { "Content-Type": "application/json" },
    });
    if (!res.ok) throw Error();
    const data = await res.json();
    return data;
  } catch {
    throw Error(`Failed updating user's data`);
  }
}

//DELETE - whole account
export async function deleteAccount(id) {
  try {
    const res = await fetch(`${URL_JSON_SERVER}/${id}`, {
      method: "DELETE",
    });
    if (!res.ok) throw Error();
    const data = await res.json();
    console.log(data);
    return data;
  } catch {
    throw Error(`Failed deleting the account`);
  }
}
