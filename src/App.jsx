import "./App.css";
import { Rentals } from "./Components/Rentals/Rentals";
import { AddHouse } from "./Components/AddHouse/AddHouse";
import { useState } from "react";

function App() {
  const [tog, setTog] = useState(false);

  return (
    <div className="App">
      <button
        className="toggleForm"
        onClick={() => {
          setTog(!tog);
        }}
      >
        {tog ? "RENT" : "ADD HOUSE"}
      </button>
      {tog ? <AddHouse /> : <Rentals />}
      <br />
    </div>
  );
}

export default App;
