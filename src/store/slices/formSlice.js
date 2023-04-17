import { createSlice } from "@reduxjs/toolkit";
import { addCar } from "./carsSlices";

const formSlice = createSlice({
  name: "form",
  initialState: {
    name: "",
    cost: undefined,
  },
  reducers: {
    changeName: (state, action) => {
      state.name = action.payload;
    },
    changeCost: (state, action) => {
      state.cost = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addCar, (state, action) => {
      state.name = "";
      state.cost = 0;
    });
  },
});

export const { changeName, changeCost } = formSlice.actions;
export default formSlice.reducer;
