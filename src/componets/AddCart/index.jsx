import React, { useState } from "react";
import "./index.css";

function AddCart({ prodId, addCart_added, addCart_default }) {
  const [addCart, setaddCart] = useState({});

  const viewAddCart = (id) => {
    setaddCart((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  const isAdded = addCart[prodId];

  return (
    <div className="addCart_box">
      <button
        className={isAdded ? "addCart_added" : "addCart_default"}
        onClick={() => viewAddCart(prodId)}
      >
        {isAdded ? addCart_added : addCart_default}
      </button>
    </div>
  );
}

export default AddCart;