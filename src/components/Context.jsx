import React, { createContext, useState } from "react";

const fecthedData = createContext();

function Context(props) {
  const [favt, setFavt] = useState([]);

  //Dummy data
  const [storeData] = useState([
    {
      Id: "001",
      placeName: "Bengalore",
      type: "Bachelor",
      landmark: "Theater",
      budget: "5lac",
    },
    {
      Id: "002",
      placeName: "Chennai",
      type: "Family",
      landmark: "Park",
      budget: "2lac",
    },
    {
      Id: "003",
      placeName: "Bengalore",
      type: "Bachelor",
      landmark: "Park",
      budget: "10lac",
    },
    {
      Id: "004",
      placeName: "Bengalore",
      type: "Family",
      landmark: "Temple",
      budget: "15lac",
    },
    {
      Id: "005",
      placeName: "Chennai",
      type: "Bachelor",
      landmark: "Theater",
      budget: "5lac",
    },
    {
      Id: "006",
      placeName: "Chennai",
      type: "Bachelor",
      landmark: "Park",
      budget: "10lac",
    },
    {
      Id: "007",
      placeName: "Mumbai",
      type: "Bachelor",
      landmark: "Theater",
      budget: "5lac",
    },
    {
      Id: "008",
      placeName: "Mumbai",
      type: "Bachelor",
      landmark: "Park",
      budget: "2lac",
    },
    {
      Id: "009",
      placeName: "Mumbai",
      type: "Family",
      landmark: "Temple",
      budget: "10lac",
    },
  ]);

  return (
    <fecthedData.Provider value={{ favt, setFavt, storeData }}>
      {props.children}
    </fecthedData.Provider>
  );
}

export default Context;
export { fecthedData };
