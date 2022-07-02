import React from "react";
import capitalize from "../scripts/capitalize";

class SocialLink extends React.Component {
  render() {
    return (
      <li>
        <a
          href={this.props.href}
          target="_blank"
          className={"fa-brands fa-" + this.props.site}
          title={capitalize(this.props.site)}
        />
      </li>
    );
  }
}

export default SocialLink;
