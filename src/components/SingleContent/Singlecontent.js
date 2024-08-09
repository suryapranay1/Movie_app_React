import React, { useState } from "react";
import Badge from "@mui/material/Badge";

import { img_300, unavailable } from "../../config/config";
import "../SingleContent/Singlecontent.css";
import COntentModal from "../contentmodal/ContentModal";

const Singlecontent = ({
  id,
  poster,
  title,
  date,
  media_type,
  vote_average,
  overview, // Make sure to include "overview" here
}) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <div className="media" onClick={handleOpen}>
        <Badge
          badgeContent={vote_average}
          color={vote_average > 7 ? "primary" : "secondary"}
        ></Badge>
        <img
          className="poster"
          src={poster ? `${img_300}/${poster}` : unavailable}
          alt={title}
        />
        <b className="title">{title}</b>
        <span className="subTitle">
          {media_type === "tv" ? "TV Series" : "Movie"}
          <span className="subTitle">{date}</span>
        </span>
      </div>
      <COntentModal
        open={open}
        handleClose={handleClose}
        title={title}
        poster={poster}
        date={date}
        overview={overview} // Pass "overview" to the modal
      />
    </>
  );
};

export default Singlecontent;
