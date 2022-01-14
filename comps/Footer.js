import Link from 'next/link';
import {
  AiFillBehanceSquare,
  AiFillGithub,
  AiFillLinkedin,
} from 'react-icons/ai';

const Footer = () => {
  return (
    <footer>
      <div className="callAndEmail">
        <div className="call">
          <h4>CALL</h4>
          <p style={{ fontSize: '1rem', opacity: '0.7' }}>+91 7892446715</p>
        </div>
        <div className="email">
          <h4>EMAIL</h4>
          <p style={{ fontSize: '1rem', opacity: '0.7' }}>
            itshimanshuk2002@gmail.com
          </p>
        </div>
      </div>
      <div className="smedia2">
        <div className="smedia1">
          <div className="ghub">
            <Link href="https://github.com/HK24-HIMANSHU">
              <AiFillGithub size="2.2rem" />
            </Link>
          </div>
          <div className="lnkin">
            <Link href="https://www.linkedin.com/in/himanshu-kumar-31750a206/">
              <AiFillLinkedin size="2.2rem" />
            </Link>
          </div>
          <div className="behance">
            <Link href="https://www.behance.net/HimanshuK_">
              <AiFillBehanceSquare size="2.2rem" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
