import { createContext, useContext, useState } from "react";

const AppContext = createContext();

const initialState = {
  //global
  isLoading: false,
  isAuthenticated: false,
  isSettingsPopupOpen: false,
  currentMonth: "year",
  //login
  ifUserHaveAccount: false,
  name: "",
  password: "",
  savingsGoal: "",
  income: "",
  currency: "USD",
  //addExpense
  category: "",
  cost: "",
  description: "",
};

function reducer(state, action) {
  switch (action.type) {
    case: "typeName"
  }
}

function AppProvider({ children }) {
  const [isLoading, setIsLoading] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  //Login form
  const [ifUserHaveAccount, setIfUserHaveAccount] = useState(false);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [savingsGoal, setSavingsGoal] = useState("");
  const [income, setIncome] = useState("");
  const [currency, setCurrency] = useState("USD");

  //ExpenseForm
  const [category, setCategory] = useState("");
  const [cost, setCost] = useState("");
  const [description, setDescription] = useState("");

  //SettingsPopup
  const [isSettingsPopupOpen, setIsSettingsPopupOpen] = useState(false);

  const [currentMonth, setCurrentMonth] = useState("year");

  return (
    <AppContext.Provider
      value={{
        ifUserHaveAccount,
        setIfUserHaveAccount,
        name,
        setName,
        password,
        setPassword,
        savingsGoal,
        setSavingsGoal,
        income,
        setIncome,
        isAuthenticated,
        setIsAuthenticated,
        category,
        setCategory,
        cost,
        setCost,
        description,
        setDescription,
        isLoading,
        setIsLoading,
        isSettingsPopupOpen,
        setIsSettingsPopupOpen,
        currency,
        setCurrency,
        currentMonth,
        setCurrentMonth,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

function useApp() {
  const context = useContext(AppContext);
  if (context === undefined)
    throw new Error("AppContext was used outside AppProvider");
  return context;
}

export { AppProvider, useApp };
