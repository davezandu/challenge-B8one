import React, { useState } from "react";
import "./index.css";

function Wishlist({ wishlistId }) {
    const [addwishlist, setaddwishlist] = useState({});
  
    const viewProdWishlist = (id) => {
      setaddwishlist((prevState) => ({
        ...prevState,
        [id]: !prevState[id],
      }));
    };
  
    const isAdded = addwishlist[wishlistId];
  
    return (
      <button
        className={isAdded ? "wishlist_added" : "wishlist_default"}
        onClick={() => viewProdWishlist(wishlistId)}
      >
      </button>
    );
  }

export default Wishlist;
