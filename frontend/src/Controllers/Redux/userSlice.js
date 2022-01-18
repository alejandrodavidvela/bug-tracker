import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "user",
  initialState: [{}],
  reducers: {
    getUser: (state) => {
      state.push({ name: "Alex Vela" });
      state.push({ name: "Jen Sakian" });
    },
  },
});

export default slice.reducer;
export const { getUser } = slice.actions;
