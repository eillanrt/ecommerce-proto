import React from "react";
import capitalize from "../scripts/capitalize";

class SearchBar extends React.Component {
  render() {
    return (
      <>
        <div className="form-group">
          <input
            type="text"
            placeholder={"Search " + capitalize(this.props.category)}
            onChange={this.props.onChange}
            value={this.props.value}
            className="form-control"
          />
        </div>
        {this.props.showClear && (
          <div>
            <button className="btn btn-danger" onClick={this.props.onClear}>
              Clear
            </button>
          </div>
        )}
      </>
    );
  }
}
export default SearchBar;
