import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  ifUserHaveAccount: false,
  name: "",
  password: "",
  savingsGoal: "",
  income: "",
  currency: "",
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    clearLoginInputs(state) {
      state.name = "";
      state.password = "";
      state.savingsGoal = "";
      state.income = "";
      state.currency = "USD";
    },
    typeName(state, action) {
      state.name = action.payload;
    },
    typePassword(state, action) {
      state.password = action.payload;
    },
    typeSavingsGoal(state, action) {
      state.savingsGoal = action.payload;
    },
    typeIncome(state, action) {
      state.income = action.payload;
    },
    chooseCurrency(state, action) {
      state.currency = action.payload;
    },
    userNoAccount(state) {
      state.ifUserHaveAccount = false;
    },
    userHasAccount(state) {
      state.ifUserHaveAccount = true;
    },
  },
});

export const {
  clearLoginInputs,
  typeName,
  typePassword,
  typeSavingsGoal,
  typeIncome,
  chooseCurrency,
  userNoAccount,
  userHasAccount,
} = loginSlice.actions;
export default loginSlice.reducer;
