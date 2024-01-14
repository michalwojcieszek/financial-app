import { createContext, useContext, useState } from "react";

const AppContext = createContext();

function AppProvider({ children }) {
  const [ifUserHaveAccount, setIfUserHaveAccount] = useState(false);
  const [name, setName] = useState("Patrick");
  const [password, setPassword] = useState("");
  const [limit, setLimit] = useState("");
  const [income, setIncome] = useState("");

  //   const initialState = {
  //     ifUserHaveAccount: false,
  //     name: "",
  //     password: "",
  //     limit: "",
  //     income: "",
  //   };

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
