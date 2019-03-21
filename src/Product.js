import React from "react";

class Product extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cart: 0
        };
    }

    addToCart() {
        if (this.state.cart < this.props.limit) {
            this.setState({cart: this.state.cart + 1},
                () => alert("There are " + this.state.cart + " "
                            + this.props.productName + "s in your cart!"));
        } else if (this.props.limit === 0) {
            alert("This item is out of stock!");
        } else {
            alert("There are too many " + this.props.productName + "s in your cart!");
        }
    }

    render() {
        return (
            <div class="card">
                <div class="content">
                    <div class="header">{this.props.productName}</div>
                    <div class="description">
                        Price: ${this.props.price}
                    </div>
                </div>
                <div class="ui bottom attached button" onClick={ev => this.addToCart()}>
                    <i class="add icon"></i>
                    Add to Cart
                </div>
            </div>
        );
    }

}

export default Product;