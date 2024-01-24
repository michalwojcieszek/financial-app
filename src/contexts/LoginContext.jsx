import { createContext, useContext, useReducer } from "react";

const LoginContext = createContext();

const initialState = {
  //login
  ifUserHaveAccount: true,
  name: "",
  password: "",
  savingsGoal: "",
  income: "",
  currency: "USD",
};

function reducer(state, action) {
  switch (action.type) {
    case "userHasAccount":
      return { ...state, ifUserHaveAccount: true };
    case "userNoAccount":
      return { ...state, ifUserHaveAccount: false };
    case "setName":
      return { ...state, name: action.payload };
    case "setPassword":
      return { ...state, password: action.payload };
    case "setSavingsGoal":
      return { ...state, savingsGoal: action.payload };
    case "setIncome":
      return { ...state, income: action.payload };
    case "setCurrency":
      return { ...state, currency: action.payload };
    case "clearInputs":
      return { ...state, name: "", password: "", income: "", savingsGoal: "" };
    default:
      throw new Error("Unknown action");
  }
}

function LoginProvider({ children }) {
  const [
    { ifUserHaveAccount, name, password, savingsGoal, income, currency },
    dispatch,
  ] = useReducer(reducer, initialState);

  function userHasAccount() {
    dispatch({ type: "userHasAccount" });
  }

  function userNoAccount() {
    dispatch({ type: "userNoAccount" });
  }

  function setName(name) {
    dispatch({ type: "setName", payload: name });
  }

  function setPassword(password) {
    dispatch({ type: "setPassword", payload: password });
  }

  function setSavingsGoal(savingsGoal) {
    dispatch({ type: "setSavingsGoal", payload: savingsGoal });
  }

  function setIncome(income) {
    dispatch({ type: "setIncome", payload: income });
  }

  function setCurrency(currency) {
    dispatch({ type: "setCurrency", payload: currency });
  }

  function clearInputs() {
    dispatch({ type: "clearInputs" });
  }

  return (
    <LoginContext.Provider
      value={{
        ifUserHaveAccount,
        name,
        password,
        savingsGoal,
        income,
        currency,
        userHasAccount,
        userNoAccount,
        setName,
        setPassword,
        setSavingsGoal,
        setIncome,
        setCurrency,
        clearInputs,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
}

function useLogin() {
  const context = useContext(LoginContext);
  if (context === undefined)
    throw new Error("LoginContext was used outside LoginProvider");
  return context;
}

export { LoginProvider, useLogin };
