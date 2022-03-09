import { createSlice } from "@reduxjs/toolkit";

export const interfaceSlice = createSlice({
  name: "interface",
  initialState: {
    isLoading: false
  },
  reducers: {
    startLoading: (state) => {
      state.isLoading = true;
    },
    finishLoading: (state) => {
      state.isLoading = false;
    }
  }
});

export const {
  startLoading, finishLoading
} = interfaceSlice.actions;

export default interfaceSlice.reducer;