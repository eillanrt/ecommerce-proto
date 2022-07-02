import React from 'react';

class Categories extends React.Component {
  render() {
    return (
      <>
        <div className="form-group">
          <label for="options">Category:</label>
          <select
            id="options"
            onChange={this.props.onChange}
            value={this.props.value}
            className="form-control form-control-sm"
          >
            <option value="products">All</option>
            <option value="jewelery">Jewelery</option>
            <option value="electronics">Electronics</option>
            <option value="men's clothing">Men's Clothing</option>
            <option value="women's clothing">Women's Clothing</option>
          </select>
        </div>
      </>
    );
  }
}
export default Categories;
