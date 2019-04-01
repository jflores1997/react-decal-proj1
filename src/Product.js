import React from "react";

class Product extends React.Component {

    render() {
        let {productName, price, onAddToCart, onRemoveFromCart} = this.props;
        return (
            <div className="card">
                <div className="content">
                    <div className="header">{productName}</div>
                    <div className="description">
                        Price: ${price}
                    </div>
                </div>
                <div className="ui bottom attached button" onClick={() => onAddToCart(productName, price)}>
                    <i className="add icon"></i>
                    Add to Cart
                </div>
                <div className="ui bottom attached button" onClick={() => onRemoveFromCart(productName)}>
                    <i className="remove icon"></i>
                    Remove from Cart
                </div>
            </div>
        );
    }

}

export default Product;