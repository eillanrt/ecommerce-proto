import React from "react";
import ProductDescription from "./ProductDescription.jsx";
import "../styles/product.css";

class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showDescription: false,
    };
    this.showDescription = this.showDescription.bind(this);
  }

  showDescription() {
    this.setState({ showDescription: !this.state.showDescription });
  }

  render() {
    const { image, name, price, description } = this.props;
    return (
      <div className="product card">
        <div className="img-wrapper">
          <img src={image} alt={name} />
        </div>
        <div className="product-details card-body">
          <h3 className="card-title">{name}</h3>
          <h4>{price}</h4>
          {this.state.showDescription && (
            <ProductDescription content={description} />
          )}
          <div className="rating">
            <p>{this.props.rating.rate} &#9733;</p>
            <p>{this.props.rating.count} Reviews</p>
          </div>
        </div>
        <button className="btn btn-warning" onClick={this.showDescription}>
          Add to Cart
        </button>
      </div>
    );
  }
}

export default Product;
