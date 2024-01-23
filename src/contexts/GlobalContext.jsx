import { createContext, useContext, useReducer } from "react";

const GlobalContext = createContext();

const initialState = {
  //global
  isLoading: false,
  isAuthenticated: false,
  isSettingsPopupOpen: false,
  currentMonth: "year",
};

function reducer(state, action) {
  switch (action.type) {
    case "loading":
      return { ...state, isLoading: true };
    case "notLoading":
      return { ...state, isLoading: false };
    case "authenticate":
      return { ...state, isAuthenticated: true };
    case "unAuthenticate":
      return { ...state, isAuthenticated: false };
    case "openSettingsPopup":
      return { ...state, isSettingsPopupOpen: true };
    case "closeSettingsPopup":
      return { ...state, isSettingsPopupOpen: false };
    case "setCurrentMonth":
      return { ...state, currentMonth: action.payload };
    default:
      throw new Error("Unknown action");
  }
}

function GlobalProvider({ children }) {
  const [
    { isLoading, isAuthenticated, isSettingsPopupOpen, currentMonth },
    dispatch,
  ] = useReducer(reducer, initialState);

  function loading() {
    dispatch({ type: "loading" });
  }

  function notLoading() {
    dispatch({ type: "notLoading" });
  }

  function authenticate() {
    dispatch({ type: "authenticate" });
  }

  function unAuthenticate() {
    dispatch({ type: "unAuthenticate" });
  }

  function openSettingsPopup() {
    dispatch({ type: "openSettingsPopup" });
  }

  function closeSettingsPopup() {
    dispatch({ type: "closeSettingsPopup" });
  }

  function setCurrentMonth(month) {
    dispatch({ type: "setCurrentMonth", payload: month });
  }

  return (
    <GlobalContext.Provider
      value={{
        isLoading,
        isAuthenticated,
        isSettingsPopupOpen,
        currentMonth,
        loading,
        notLoading,
        authenticate,
        unAuthenticate,
        openSettingsPopup,
        closeSettingsPopup,
        setCurrentMonth,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

function useGlobal() {
  const context = useContext(GlobalContext);
  if (context === undefined)
    throw new Error("GlobalContext was used outside GlobalProvider");
  return context;
}

export { GlobalProvider, useGlobal };
