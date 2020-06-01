import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export enum VisiblityFilter {
  ShowAll = "SHOW_ALL",
  ShowCompleted = "SHOW_COMPLETED",
  ShowActive = "SHOW_ACTIVE",
}

const initialState = VisiblityFilter.ShowAll;

const visiblityFilterSlice = createSlice({
  name: "visiblityFilter",
  initialState,
  reducers: {
    setVisiblityFilter(state, action: PayloadAction<VisiblityFilter>) {
      return action.payload;
    },
  },
});

export const { setVisiblityFilter } = visiblityFilterSlice.actions;

export default visiblityFilterSlice.reducer;
