import { createSlice, nanoid } from "@reduxjs/toolkit";

const carsSlice = createSlice({
  name: "cars",
  initialState: {
    searchTerm: "",
    cars: [
      //   {
      //     name: "",
      //     cost: "",
      //     id: nanoid(),
      //   },
    ],
  },
  reducers: {
    addCar: (state, action) => {
      state.cars.push({
        name: action.payload.name,
        cost: action.payload.cost,
        id: nanoid(),
      });
    },
    removeCar: (state, action) => {
      state.cars = state.cars.filter((car) => car.id !== action.payload.id);
    },
    updateSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
  },
});

export const { addCar, removeCar, updateSearchTerm } = carsSlice.actions;
export default carsSlice.reducer;
