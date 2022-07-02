import React from 'react';
import SocialLink from './SocialLink.jsx';
import '../styles/footer.css';

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <ul className="socials">
          <SocialLink href="https://twitter.com/eillan05" site="twitter" />
          <SocialLink href="https://github.com/eillanrt" site="github" />
          <SocialLink href="https://codepen.io/eillan04" site="codepen" />
        </ul>
        <p>&copy; 2022 Allan Robert Tan</p>
      </footer>
    );
  }
}

export default Footer;
