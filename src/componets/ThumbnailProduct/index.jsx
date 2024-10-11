import React from "react";
import "./index.css";

function ThumbnailProduct(props) {
  return (
        <figure className="productItem__image">
            <img src={props.src} alt={props.title} />
        </figure>
  )
}

export default ThumbnailProduct;
