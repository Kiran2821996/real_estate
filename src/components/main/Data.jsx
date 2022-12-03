import React, { useState, useContext, useEffect } from "react";

import {Button,InputLabel,FormControl} from "@mui/material";

import MenuItem from "@mui/material/MenuItem";

import Select from "@mui/material/Select";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";

import { fecthedData } from "../Context";

import "./Data.css";

function Data() {
  const { favt, setFavt, storeData } = useContext(fecthedData);

  const [filter, setFilter] = useState({
    placeName: "",
    type: "",
    landmark: "",
    budget: "",
  });
  const [search, setSearch] = useState([]);

  useEffect(() => {
    if (
      filter.placeName === "" &&
      filter.type === "" &&
      filter.landmark === "" &&
      filter.budget === ""
    ) {
      setSearch([...storeData]);
    }
  }, [
    filter.budget,
    filter.landmark,
    filter.placeName,
    filter.type,
    storeData,
  ]);

//Handling clear filter
  const handleClear = () => {
    setFilter({
      placeName: "",
      type: "",
      landmark: "",
      budget: "",
    });
    setSearch([...storeData]);
  };

 // Handling search
  const handleClick = () => {
    if (filter.placeName !== "") {
      let filtering1 = storeData.filter(
        (ele) => ele.placeName === filter.placeName
      );

      setSearch([...filtering1]);
    }
    if (filter.type !== "") {
      let filtering1 = storeData.filter((ele) => ele.type === filter.type);

      setSearch([...filtering1]);
    }
    if (filter.landmark !== "") {
      let filtering1 = storeData.filter(
        (ele) => ele.landmark === filter.landmark
      );

      setSearch([...filtering1]);
    }
    if (filter.budget !== "") {
      let filtering1 = storeData.filter((ele) => ele.budget === filter.budget);

      setSearch([...filtering1]);
    }
    //  .............................
    if (filter.placeName !== "" && filter.landmark !== "") {
      let filtering1 = storeData.filter(
        (ele) => ele.placeName === filter.placeName
      );
      let filtering2 = filtering1.filter(
        (ele) => ele.landmark === filter.landmark
      );

      setSearch([...filtering2]);
    }
    if (filter.placeName !== "" && filter.type !== "") {
      let filtering1 = storeData.filter(
        (ele) => ele.placeName === filter.placeName
      );
      let filtering2 = filtering1.filter((ele) => ele.type === filter.type);

      setSearch([...filtering2]);
    }
    if (filter.placeName !== "" && filter.budget !== "") {
      let filtering1 = storeData.filter(
        (ele) => ele.placeName === filter.placeName
      );
      let filtering2 = filtering1.filter((ele) => ele.budget === filter.budget);

      setSearch([...filtering2]);
    }
    if (filter.type !== "" && filter.landmark !== "") {
      let filtering1 = storeData.filter((ele) => ele.type === filter.type);
      let filtering2 = filtering1.filter(
        (ele) => ele.landmark === filter.landmark
      );

      setSearch([...filtering2]);
    }
    if (filter.budget !== "" && filter.landmark !== "") {
      let filtering1 = storeData.filter((ele) => ele.budget === filter.budget);
      let filtering2 = filtering1.filter(
        (ele) => ele.landmark === filter.landmark
      );

      setSearch([...filtering2]);
    }
    if (filter.budget !== "" && filter.type !== "") {
      let filtering1 = storeData.filter((ele) => ele.budget === filter.budget);
      let filtering2 = filtering1.filter((ele) => ele.type === filter.type);

      setSearch([...filtering2]);
    }
    // ..................................
    if (
      filter.placeName !== "" &&
      filter.landmark !== "" &&
      filter.type !== ""
    ) {
      let filtering1 = storeData.filter(
        (ele) => ele.placeName === filter.placeName
      );
      let filtering2 = filtering1.filter(
        (ele) => ele.landmark === filter.landmark
      );
      let filtering3 = filtering2.filter((ele) => ele.type === filter.type);

      setSearch([...filtering3]);
    }
    if (
      filter.placeName !== "" &&
      filter.landmark !== "" &&
      filter.budget !== ""
    ) {
      let filtering1 = storeData.filter(
        (ele) => ele.placeName === filter.placeName
      );
      let filtering2 = filtering1.filter(
        (ele) => ele.landmark === filter.landmark
      );
      let filtering3 = filtering2.filter((ele) => ele.budget === filter.budget);

      setSearch([...filtering3]);
    }
    if (filter.landmark !== "" && filter.type !== "" && filter.budget !== "") {
      let filtering1 = storeData.filter(
        (ele) => ele.landmark === filter.landmark
      );
      let filtering2 = filtering1.filter((ele) => ele.type === filter.type);
      let filtering3 = filtering2.filter((ele) => ele.budget === filter.budget);

      setSearch([...filtering3]);
    }
    if (filter.placeName !== "" && filter.type !== "" && filter.budget !== "") {
      let filtering1 = storeData.filter(
        (ele) => ele.placeName === filter.placeName
      );
      let filtering2 = filtering1.filter((ele) => ele.type === filter.type);
      let filtering3 = filtering2.filter((ele) => ele.budget === filter.budget);

      setSearch([...filtering3]);
    }
    // ...........................................
    if (
      filter.placeName !== "" &&
      filter.landmark !== "" &&
      filter.type !== "" &&
      filter.budget !== ""
    ) {
      let filtering1 = storeData.filter(
        (ele) => ele.placeName === filter.placeName
      );
      let filtering2 = filtering1.filter(
        (ele) => ele.landmark === filter.landmark
      );
      let filtering3 = filtering2.filter((ele) => ele.type === filter.type);
      let filtering4 = filtering3.filter((ele) => ele.budget === filter.budget);
      setSearch([...filtering4]);
    }
  };

// Handling filter for place
  const handlePlaceFilter = (e) => setFilter({ ...filter, placeName: e.target.value });


 // Handling filter for landmark 
  const handleLandmarkFilter = (e) => setFilter({ ...filter, landmark: e.target.value });


// Handling filter for type
  const handleTypeFilter = (e) =>  setFilter({ ...filter, type: e.target.value });

// Handling filter for budget
  const handleBudgetFilter = (e) => {
    setFilter({ ...filter, budget: e.target.value });
  };

// Handling add favourites
  const handleAddHeart = (ele) => {
    setFavt([...favt, ele]);
  };

// Handling remove favourites
  const handleRemoveHeart = (ele) => {
    favt.map((item) => {
      if (item.Id === ele.Id) {
        favt.splice(favt.indexOf(ele), 1);
        setFavt([...favt]);
      }
    });
  };

  return (
    <>
      <div className="filter_div">
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
          <InputLabel id="demo-simple-select-label">Place</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={filter.placeName}
            label="Place"
            onChange={(e) => handlePlaceFilter(e)}
          >
            <MenuItem value=""></MenuItem>
            <MenuItem value="Bengalore">Bengalore</MenuItem>
            <MenuItem value="Chennai">Chennai</MenuItem>
            <MenuItem value="Mumbai">Mumbai</MenuItem>
          </Select>
        </FormControl>
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
          <InputLabel id="demo-simple-select-label">Landmark</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={filter.landmark}
            label="Landmark"
            onChange={(e) => handleLandmarkFilter(e)}
          >
            <MenuItem value=""></MenuItem>
            <MenuItem value="Park">Park</MenuItem>
            <MenuItem value="Theater">Theater</MenuItem>
            <MenuItem value="Temple">Temple</MenuItem>
          </Select>
        </FormControl>
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
          <InputLabel id="demo-simple-select-label">Type</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={filter.type}
            label="Type"
            onChange={(e) => handleTypeFilter(e)}
          >
            <MenuItem value=""></MenuItem>
            <MenuItem value="Bachelor">Bachelor</MenuItem>
            <MenuItem value="Family">Family</MenuItem>
          </Select>
        </FormControl>
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
          <InputLabel id="demo-simple-select-label">Budget</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={filter.budget}
            label="Budget"
            onChange={(e) => handleBudgetFilter(e)}
          >
            <MenuItem value=""></MenuItem>

            <MenuItem value="5lac">5lac</MenuItem>
            <MenuItem value="2lac">2lac</MenuItem>
            <MenuItem value="10lac">10lac</MenuItem>
            <MenuItem value="15lac">15lac</MenuItem>
          </Select>
        </FormControl>
        <div>
          <Button variant="contained" onClick={handleClick}>
            Seach
          </Button>{" "}
          <Button variant="outlined" onClick={handleClear}>
            Clear filter
          </Button>
        </div>
      </div>
      <div className="mapped_item">
        {search.map((ele) => {
          return (
            <div key={ele.Id}>
              <Card sx={{ maxWidth: 345 }} className="item_data">
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {ele.placeName}
                  </Typography>
                  <Typography variant="body2" component="div">
                    {ele.type}_{ele.landmark}_{ele.budget}
                  </Typography>
                </CardContent>
                <CardActions>
                  {favt.filter((item) => item.Id === ele.Id).length > 0 ? (
                    <div className="heart" onClick={(e) => handleRemoveHeart(ele)}>
                      <HeartFilled style={{ color: "red" }} />
                    </div>
                  ) : (
                    <div className="heart" onClick={(e) => handleAddHeart(ele)}>
                      <HeartOutlined />
                    </div>
                  )}
                </CardActions>
              </Card>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Data;
