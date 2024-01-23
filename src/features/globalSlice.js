import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  isAuthenticated: false,
  isSettingsPopupOpen: false,
  currentMonth: "year",
};

const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {},
});

export const {} = globalSlice.actions;
export default globalSlice.reducer;
