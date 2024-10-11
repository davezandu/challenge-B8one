import React from "react";
import "./index.css";

function Price(props) {

    function formatCurrencyValue(value) {
        return Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
        }).format(value);
    }      

  return (
    <div className="productItem__price">
       <p className="oldPrice">{formatCurrencyValue(props.oldprice)}</p>
       <p className="bestPrice">{formatCurrencyValue(props.bestprice)}</p>
       <p className="installments">em até <b>{props.installments}</b> sem juros</p>
    </div>
  )
}

export default Price;
