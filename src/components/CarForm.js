import { useDispatch, useSelector } from "react-redux";
import { changeName, changeCost, addCar } from "../store";

const CarForm = () => {
  const dispatch = useDispatch();
  const { name, cost } = useSelector((state) => state.form);

  const handleNameChange = (e) => {
    dispatch(changeName(e.target.value));
  };

  const handleCostChange = (e) => {
    const carCost = parseInt(e.target.value);
    dispatch(changeCost(carCost));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addCar({ name, cost }));
  };

  return (
    <div className="car-form panel">
      <h4 className="subtitle is-3">Car form</h4>
      <form onSubmit={handleSubmit}>
        <div className="field-group">
          <div className="field">
            <input type="text" value={name} onChange={handleNameChange} />
          </div>
          <div className="field">
            <input type="number" value={cost} onChange={handleCostChange} />
          </div>
          <div className="field">
            <button type="submit">Add car</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CarForm;
