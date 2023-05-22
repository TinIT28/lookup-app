import { socialLinks } from './data';
import { pageLinks } from './data';
import PageLinks from './PageLinks';
import SocialLink from './SocialLink';

const Footer = () => {
  return (
    <footer className="section footer">
      {/* <PageLinks parentClass='footer-links' itemClass='footer-link' /> */}
      <ul className="footer-links">
        {pageLinks.map((link) => {
          const { id, href, text } = link;
          return (
            // <SocialLink key={link.id}{...link} itemClass="footer-icon"/>
            <li key={id}>
              <a href={href} 
              className="footer-link">
                {text}
              </a>
            </li>
          );
        })}
      </ul>
      
      <p className="copyright">
            Coporation Technology LOOKUP
        <span id="date">{new Date().getFullYear()}</span> all rights reserved
      </p>
      <p>Venue: E2a-7, D1 Street, Long Thanh My, Thu Duc City, Ho Chi Minh City</p>
      <p>DKKD-MST number: 0312578469</p>
      <p>Numbers: 0987654321</p> <span>Email: gm@lookup.com</span>

      <ul className="footer-icons">
        {socialLinks.map((link) => {
          const { id, href, icon } = link;
          return (          
            <li key={id}>
              <a href={href} target="_blank" className="footer-icon">
                <i className={icon}></i>
              </a>
             
            </li>
          );
        })}
      </ul>
    </footer>
  );
};
export default Footer;
