import React, { useContext } from "react";
import { fecthedData } from "../Context";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";

import "./Favt.css"

function Favt() {
  const { favt, setFavt } = useContext(fecthedData);

//handle add favourites
  const handleAddHeart = (ele) => {
    setFavt([...favt, ele]);
  };

//handle remove favourites
  const handleRemoveHeart = (ele) => {
    favt.map((item) => {
      if (item.Id === ele.Id) {
        favt.splice(favt.indexOf(ele), 1);
        setFavt([...favt]);
      }
    });
  };

  return (
    <div>
      <div className="mapped_item">
        {favt.map((ele) => {
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
    </div>
  );
}

export default Favt;
