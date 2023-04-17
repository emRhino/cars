import { useDispatch, useSelector } from "react-redux";
import { updateSearchTerm } from "../store";

const CarSearch = () => {
  const dispatch = useDispatch();
  const searchTerm = useSelector((state) => state.cars.searchTerm);

  const handleSearchtermChange = (e) => {
    dispatch(updateSearchTerm(e.target.value));
  };

  return (
    <div>
      <div className="list-header">
        <h3 className="title is-3">My Cars</h3>
        <div className="search field is-horizontal">
          <label className="label">Search</label>
          <input
            type="text"
            className="input"
            value={searchTerm}
            onChange={handleSearchtermChange}
          />
        </div>
      </div>
    </div>
  );
};

export default CarSearch;
