import "./Footer.css";
import yt from "../../assets/social/yt.svg";
import insta from "../../assets/social/insta.svg";
import fb from "../../assets/social/fb.svg";
import twitter from "../../assets/social/twitter.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-icons">
        <img src={fb} alt="fb" />
        <img src={insta} alt="insta" />
        <img src={twitter} alt="twitter" />
        <img src={yt} alt="youtube" />
      </div>
      <ul>
        <li>Audio Description</li>
        <li>Help Center</li>
        <li>Gift Cards</li>
        <li>Media Center</li>
        <li>Investor Relations</li>
        <li>Jobs</li>
        <li>Terms of use</li>
        <li>Privacy</li>
        <li>Legal Notices</li>
        <li>Cookies Preference</li>
        <li>Corporate Information</li>
        <li>Contact Us</li>
      </ul>
      <p className="copyright-text">© 1997-2024 Netflix, Inc.</p>
    </div>
  );
};

export default Footer;
