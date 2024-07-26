import React from "react";
import { Link } from "react-router-dom";
import "./VendingMachine.css";

function VendingMachine() {
  return (
    <div className="VendingMachine">
      <h1>Vending Machine</h1>
      <ul>
        <li>
          <Link to="/snack/Chips">Chips</Link>
        </li>
        <li>
          <Link to="/snack/Soda">Soda</Link>
        </li>
        <li>
          <Link to="/snack/Candy">Candy</Link>
        </li>
      </ul>
    </div>
  );
}

export default VendingMachine;