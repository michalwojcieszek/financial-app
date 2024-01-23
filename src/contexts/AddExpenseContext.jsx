import { createContext, useContext, useReducer } from "react";

const AddExpeneContext = createContext();

const initialState = {
  //addExpense
  category: "",
  cost: "",
  description: "",
  ifRecurring: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "setCategory":
      return { ...state, category: action.payload };
    case "setCost":
      return { ...state, cost: action.payload };
    case "setDescription":
      return { ...state, description: action.payload };
    case "setIfRecurring":
      return { ...state, ifRecurring: action.payload };
    case "clearAll":
      return {
        ...state,
        category: "",
        cost: "",
        description: "",
        ifRecurring: false,
      };
    default:
      throw new Error("Unknown action");
  }
}

function AddExpenseProvider({ children }) {
  const [{ category, cost, description, ifRecurring }, dispatch] = useReducer(
    reducer,
    initialState
  );

  function setCategory(category) {
    dispatch({ type: "setCategory", payload: category });
  }

  function setCost(cost) {
    dispatch({ type: "setCost", payload: cost });
  }

  function setDescription(description) {
    dispatch({ type: "setDescription", payload: description });
  }

  function setIfRecurring(checkbox) {
    dispatch({ type: "setIfRecurring", payload: checkbox });
  }

  function clearAll() {
    dispatch({ type: "clearAll" });
  }

  return (
    <AddExpeneContext.Provider
      value={{
        category,
        cost,
        description,
        ifRecurring,
        setCategory,
        setCost,
        setDescription,
        setIfRecurring,
        clearAll,
      }}
    >
      {children}
    </AddExpeneContext.Provider>
  );
}

function useAddExpense() {
  const context = useContext(AddExpeneContext);
  if (context === undefined)
    throw new Error("AddExpeneContext was used outside AddExpenseProvider");
  return context;
}

export { AddExpenseProvider, useAddExpense };
