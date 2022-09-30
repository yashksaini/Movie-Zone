import React from "react";
import { Link } from "react-router-dom";
import "../styles/card.css";
import IMAGE_NOT_FOUND from "../images/not_found.png";

const Card = ({ image, year, title, type, id }) => {
  if (image === "N/A") {
    image = IMAGE_NOT_FOUND;
  }
  return (
    <div className="card_box animate__animated animate__backInUp">
      <div className="card_img">
        <img src={image} alt="show"></img>
        <button className="card_type">{type}</button>
      </div>
      <div className="card_det">
        <div className="name">
          <span>{title.substr(0, 18)}..</span>
          <span>{year.substr(0, 4)}</span>
        </div>
        <Link to={`/movie/${id}`}>
          <button className="det_btn">View Details</button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
