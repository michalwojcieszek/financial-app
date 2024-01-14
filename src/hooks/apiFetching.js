const URL_JSON_SERVER = "http://localhost:8000/users";

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

export async function getData() {
  const res = await fetch(URL_JSON_SERVER);
  const data = await res.json();
  console.log(data);
  return data;
}

export async function getUserDataLoader(id) {
  const res = await fetch(URL_JSON_SERVER);
  const data = await res.json();
  const userData = data.find((user) => user.id === id);
  return userData;
}

// const URL_JSON_SERVER = "http://localhost:8000/users";

// const userTemplate = {
//   userData: {
//     name: "",
//     password: "",
//     monthlyLimit: "",
//   },
//   expenses: {
//     january: {
//       entertainment: [],
//       food: [],
//     },
//   },
// };

// const [ifUserHaveAccount, setIfUserHaveAccount] = useState(false);
// const [name, setName] = useState("");
// const [password, setPassword] = useState("");
// const [limit, setLimit] = useState("");
// const [income, setIncome] = useState("");

// const setUser = function () {
//   const newUser = {
//     ...userTemplate,
//     userData: {
//       ...userTemplate.userData,
//       name: name,
//       password: password,
//       monthlyIncome: income,
//       monthlyLimit: limit,
//     },
//   };

//   async function fetchData() {
//     const res = await fetch(URL_JSON_SERVER, {
//       method: "POST",
//       body: JSON.stringify(newUser),
//       headers: { "Content-Type": "application/json" },
//     });
//     const data = await res.json();
//     console.log(data);
//   }
//   fetchData();
// };

// function getData() {
//   async function fetchData() {
//     const res = await fetch(URL_JSON_SERVER);
//     const data = await res.json();
//     console.log(data);
//   }
//   fetchData();
// }
