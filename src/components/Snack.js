import React from "react";
import { Link } from "react-router-dom";
import "./Snack.css";

const images = {
  Chips: require("../images/chips.jpg"),
  Soda: require("../images/soda.jpg"),
  Candy: require("../images/candy.jpg")
};

function Snack({ name }) {
  return (
    <div className="Snack">
      <h2>{name}</h2>
      <img src={images[name]} alt={name} />
      <Link to="/">Back to Vending Machine</Link>
    </div>
  );
}

export default Snack;