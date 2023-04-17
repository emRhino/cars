import "bulma/css/bulma.css";
import "../styles/styles.css";
import CarSearch from "./CarSearch";
import CarsList from "./CarsList";
import CarValue from "./CarValue";
import CarForm from "./CarForm";

function App() {
  return (
    <div className="container is-fluid ">
      <CarForm />
      <CarSearch />
      <CarsList />
      <CarValue />
    </div>
  );
}

export default App;
