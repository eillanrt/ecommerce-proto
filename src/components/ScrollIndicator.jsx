import React from 'react';

class ScrollIndicator extends React.Component {
  render() {
    return (
      <div
        className="progress-container"
        style={{
          width: "100%",
          heigth: "5px",
          backgroundColor: "#ccc"
        }}
      >
        <div
          className="progress-bar"
          style={{
            width: this.props.width,
            height: "5px",
            backgroundColor: "#4682b4"
          }}
        />
      </div>
    );
  }
}
export default ScrollIndicator;
