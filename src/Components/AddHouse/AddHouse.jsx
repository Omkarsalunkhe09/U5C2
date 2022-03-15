import axios from "axios";
import { useState } from "react";

export const AddHouse = () => {
  const [houses, setHouses] = useState({
    name: "",
    ownerName: "",
    address: "",
    areaCode: "",
    rent: "",
    bachelor: "",
    married: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setHouses({ ...houses, [id]: value });
  };
  const handleSub = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8080/houses", houses);
  };
  return (
    <div className="addHouseContainer">
      <form onSubmit={handleSub}>
        <label>name</label>
        <input
          type="text"
          className="name"
          onChange={handleChange}
          id="name"
          required
        />
        <br />
        <label>ownerName</label>
        <input
          type="text"
          className="ownerName"
          onChange={handleChange}
          id="ownerName"
          required
        />
        <br />
        <label>address</label>
        <input
          type="text"
          className="address"
          onChange={handleChange}
          id="address"
          required
        />
        <br />
        <label>areaCode</label>
        <input
          type="text"
          className="areaCode"
          onChange={handleChange}
          id="areaCode"
          required
        />
        <br />
        <label>rent</label>
        <input
          type="text"
          className="rent"
          onChange={handleChange}
          id="rent"
          required
        />
        <br />
        <label>preferredTenant</label>
        <br />
        <label>bachelor</label>
        <input
          type="checkbox"
          className="bachelor"
          onChange={handleChange}
          id="bachleor"
        />
        <br />
        <label>married</label>
        <input
          type="checkbox"
          className="married"
          onChange={handleChange}
          id="married"
        />
        <br />
        <label>image</label>
        <input
          type="text"
          className="image"
          onChange={handleChange}
          id="image"
          required
        />
        <br />
        <input className="submitBtn" type="submit" />
      </form>
    </div>
  );
};
