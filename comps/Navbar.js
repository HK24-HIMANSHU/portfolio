import Link from 'next/link';
import {
  AiFillBehanceSquare,
  AiFillGithub,
  AiFillLinkedin,
} from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';
import { useRouter } from 'next/router';

const Navbar = () => {
  const router = useRouter();
  return (
    <nav>
      <div className="logo">
        <Link href="/">
          <a
            style={{
              display: 'flex',
              alignItems: 'center',
              color: '#BCFD4C',
              marginBottom: '-20px',
            }}
          >
            <DiCssdeck size="2rem" /> <span>Himanshu Kumar</span>
          </a>
        </Link>
      </div>
      <div className="pge">
        <Link href="/">
          <a style={{ color: router.pathname === '/' ? '#bcfd4c' : '#f2f2f2' }}>
            Home
          </a>
        </Link>
        <Link href="/projects">
          <a
            style={{
              color: router.pathname === '/projects' ? '#bcfd4c' : '#f2f2f2',
            }}
          >
            Projects
          </a>
        </Link>
      </div>
      <div className="smedia">
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
    </nav>
  );
};

export default Navbar;
