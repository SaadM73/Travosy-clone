import { createSlice } from "@reduxjs/toolkit";

const exampleSlice = createSlice({
  name: "example",
  initialState: {},
  reducers: {
    exampleAction: (state, action) => {
      // reducer logic
    },
  },
});

export const { exampleAction } = exampleSlice.actions;
export default exampleSlice.reducer;
