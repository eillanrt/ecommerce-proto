import React from 'react'

class ProductDescription extends React.Component {
  render() {
    return (
      <>
        <p className="product-description card-text">{this.props.content}</p>
      </>
    );
  }
}

export default ProductDescription;
