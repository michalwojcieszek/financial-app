import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  category: "",
  cost: "",
  description: "",
};

const expenseSlice = createSlice({
  name: "expense",
  initialState,
  reducers: {},
});

export const {} = expenseSlice.actions;
export default expenseSlice.reducer;
