import React from "react";
import "./styles/cart.css";
import Product from "./Product.js";
import ProductData from "./Data";
import Reciept from "./Reciept.js";

class Cart extends React.Component {
  constructor() {
    super();
    this.state = {
        cartItems: []
    };
  }

  handleAddToCart(productName, price) {
    var cartItems = this.state.cartItems;
    for (var i = 0; i < cartItems.length; i++) {
      if (cartItems[i].name === productName) {
        cartItems[i].count += 1;
        this.setState({cartItems: cartItems});
        return;
      }
    }

    cartItems.push({
      name: productName,
      price: price,
      count: 1
    });
    this.setState({cartItems: cartItems});
  }

  handleRemoveFromCart(productName) {
    var cartItems = this.state.cartItems;
    this.setState({cartItems: cartItems.filter(item => item.name !== productName)});
  }

  render() {

    return (
        <div className="page-content">
            <div className="ui cards">
              {ProductData.products.map((item) => (
                <Product productName={item.name} price={item.cost} key={item.name}
                  onAddToCart={this.handleAddToCart.bind(this)}
                  onRemoveFromCart={this.handleRemoveFromCart.bind(this)} />))}
            </div>
            <Reciept items={this.state.cartItems}/>
        </div>
    );
  }

}

export default Cart;
