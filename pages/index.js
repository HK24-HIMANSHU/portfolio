import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/dist/client/link';
import Superpower from '../comps/Superpower';
import { Typewriter } from 'react-simple-typewriter';
import useWindowSize from '../comps/useWindowSize';

export default function Home() {
  const [height, width] = useWindowSize();
  console.log(width);
  if (width < 1024) {
    return (
      <div>
        <h3>Please use a Desktop</h3>
      </div>
    );
  }
  return (
    <>
      <Head>
        <title>Himanshu Kumar</title>
        <meta name="keywords" />
      </Head>
      <div className="about">
        <Image src="/1.png" width={284} height={350} />
        <div className="twe">
          <h1 style={{ fontSize: '3rem' }}>
            I'm a
            <span
              style={{
                color: '#BCFD4C',
                fontWeight: 'bold',
                fontSize: '3rem',
                marginLeft: '10px',
              }}
            >
              <Typewriter
                loop
                cursor
                cursorStyle="_"
                typeSpeed={40}
                deleteSpeed={50}
                delaySpeed={1000}
                words={[
                  'Web Developer',
                  'UI/UX Designer',
                  'Blockchain Enthusiast',
                ]}
              />
            </span>
          </h1>
          <p style={{ fontSize: '1.3rem', opacity: '0.7' }}>
            I'm an engineering student who is currently learning about <br />
            frontend, backend, Blockchain, UI-UX and many other technologies
          </p>
          <br />
          <p style={{ fontSize: '1.3rem', opacity: '0.7' }}>
            Technical blogs are also part of my repertoire. Check them out
            below.
          </p>
          <br />
          <div className="blogbtn">
            <a href="https://himblogs.hashnode.dev/" id="blogButton">
              Read Blogs
            </a>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <div className="mysp">
        <h1 style={{ fontSize: '3rem' }}>My Superpowers</h1>
        <Superpower />
      </div>
      <br />
      <br />
      <br />
      <br />
      <div className="abtme">
        <h1 style={{ fontSize: '3rem' }}>About me</h1>
        <p style={{ fontSize: '1.3rem', lineHeight: '31.8px', opacity: '0.7' }}>
          I am a third-year engineering student at Presidency University
          Bangalore. With some experience as a UI-UX designer, I'm learning
          about frontend and backend technologies along with Blockchain.
        </p>
      </div>
    </>
  );
}
