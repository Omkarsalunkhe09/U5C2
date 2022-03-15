import axios from "axios";
import { useEffect, useState } from "react";
import "./Rentals.css";

export const Rentals = () => {
  const [data, setData] = useState([]);
  const [data2, sortData] = useState([]);

  console.log(data2);

  useEffect(() => {
    getData();
  }, [sortData]);

  const getData = () => {
    axios.get("http://localhost:8080/houses").then((res) => {
      setData(res.data);
      // console.log(res.data);
    });
  };

  // console.log(data, "data");

  return (
    <div className="rentalContainer">
      <div className="sortingButtons">
        <button
          className="sortById"
          onClick={() => {
            const sorted = data.sort((a, b) => {
              return a.id - b.id;
            });
            sortData([...sorted]);
          }}
        >
          Sort by ID
        </button>
        <button
          className="sortByRentAsc"
          onClick={() => {
            const sorted = data.sort((a, b) => {
              return a.rent - b.rent;
            });
            sortData([...sorted]);
          }}
        >
          Rent Low to high
        </button>
        <button
          className="sortByRentDesc"
          onClick={() => {
            const sorted = data.sort((a, b) => {
              return b.rent - a.rent;
            });
            sortData([...sorted]);
          }}
        >
          Rent High to low
        </button>
        <button
          className="sortByAreaAsc"
          onClick={() => {
            const sorted = data.sort((a, b) => {
              return a.areaCode - b.areaCode;
            });
            sortData([...sorted]);
          }}
        >
          Area Low to high
        </button>
        <button
          className="sortByAreaDesc"
          onClick={() => {
            const sorted = data.sort((a, b) => {
              return b.areaCode - a.areaCode;
            });
            sortData([...sorted]);
          }}
        >
          Area High to Low
        </button>
      </div>
      <input
        className="searchAddress"
        type="text"
        placeholder="Search Address"
      />
      <table className="table" border="1">
        <thead>
          <tr>
            <th>Sl.no.</th>
            <th>Name</th>
            <th>Owner Name</th>
            <th>Address</th>
            <th>Area Code</th>
            <th>Rent</th>
            <th>Available For</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {data.map((house, index) => {
            return (
              <tr key={house.id} className="houseDetails">
                <td className="houseId">{house.id}</td>
                <td className="houseName">{house.name} </td>
                <td className="ownersName">{house.ownerName}</td>
                <td className="address">{house.address}</td>
                <td className="areaCode">{house.areaCode}</td>
                <td className="rent">{house.rent}</td>
                <td className="preferredTenants">
                  {/* Show text Both or Bachelors or Married based on values */}
                </td>
                <td className="houseImage">
                  <img src={house.image} alt="house" />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
