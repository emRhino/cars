import { configureStore } from "@reduxjs/toolkit";
import carsReducer, {
  addCar,
  removeCar,
  updateSearchTerm,
} from "./slices/carsSlices";
import formReducer, { changeName, changeCost } from "./slices/formSlice";

const store = configureStore({
  reducer: {
    cars: carsReducer,
    form: formReducer,
  },
});

export { store, addCar, removeCar, changeName, changeCost, updateSearchTerm };
