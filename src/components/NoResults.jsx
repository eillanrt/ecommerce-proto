import React from "react";
import NoResultIcon from "./NoResultIcon.jsx";

class NoResults extends React.Component {
  render() {
    return (
      <div className="no-result">
        <NoResultIcon />
        <h3>No results</h3>
      </div>
    );
  }
}

export default NoResults;
