import { createContext, useContext, useState } from "react";

const AppContext = createContext();

function AppProvider({ children }) {
  const [currentUser, setCurrentUser] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  //Login form
  const [ifUserHaveAccount, setIfUserHaveAccount] = useState(false);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [limit, setLimit] = useState("");
  const [income, setIncome] = useState("");

  //MonthSelected
  // const [selectedMonth, setSelectedMonth] = useState("");

  //ExpenseForm
  const [category, setCategory] = useState("");
  const [cost, setCost] = useState("");
  const [description, setDescription] = useState("");

  return (
    <AppContext.Provider
      value={{
        ifUserHaveAccount,
        setIfUserHaveAccount,
        name,
        setName,
        password,
        setPassword,
        limit,
        setLimit,
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
