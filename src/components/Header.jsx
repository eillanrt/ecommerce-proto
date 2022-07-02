import React from "react";
import ScrollIndicator from "./ScrollIndicator.jsx";
import scrollToTop from "../scripts/scrollToTop.js";
import "../styles/header.css";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      winHeight: 0,
    };
    this.detectScroll = this.detectScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener("scroll", this.detectScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.detectScroll);
  }

  detectScroll() {
    var winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    var height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    var scrolled = (winScroll / height) * 100;
    this.setState({ winHeight: Math.round(scrolled) + "%" });
  }

  render() {
    return (
      <header>
        <div style={{ padding: "10px" }}>
          <h1 onClick={scrollToTop}>Eillan Shopping App</h1>
          <h2>e-commerce app built with ReactJS</h2>
        </div>
        <ScrollIndicator width={this.state.winHeight} />
      </header>
    );
  }
}

export default Header;
