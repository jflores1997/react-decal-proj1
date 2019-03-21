import React from "react";
import "./styles/cart.css";
import Product from "./Product.js";
import ProductData from "./Data"

class Cart extends React.Component {

  render() {
    return (
        <div className="page-content">
            <div className="ui cards">
              {ProductData.products.map((item) => (
                <Product productName={item.name} price={item.cost} limit={item.stock} />))}
            </div>
        </div>
    );
  }

}

export default Cart;
