import { configureStore } from "@reduxjs/toolkit";
import expenseReducer from "./features/expenseSlice";
import loginReducer from "./features/loginSlice";
import globalReducer from "./features/globalSlice";

const store = configureStore({
  reducer: {
    login: loginReducer,
    expense: expenseReducer,
    global: globalReducer,
  },
});

export default store;
