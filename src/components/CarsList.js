import { useDispatch, useSelector } from "react-redux";
import { removeCar } from "../store";

const CarsList = () => {
  const dispatch = useDispatch();
  const cars = useSelector((state) => state.cars.cars);

  const handleRemoveCar = (id) => {
    dispatch(removeCar({ id }));
  };

  const renderCarList = () => {
    return cars.map((car) => (
      <div className="panel" key={car.id}>
        <p>
          {car.name} - {car.cost}
        </p>
        <button
          className="button is-danger"
          onClick={() => {
            handleRemoveCar(car.id);
          }}
        >
          Delete
        </button>
      </div>
    ));
  };
  return (
    <div className="car-list">
      <ul>{renderCarList()}</ul>
    </div>
  );
};

export default CarsList;
