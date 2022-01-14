import Head from 'next/head';
import Image from 'next/image';
import useWindowSize from '../comps/useWindowSize';

const Projects = () => {
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
    <div className="mainbr">
      <h1 style={{ fontSize: '3rem' }}>UI/UX projects</h1>
      <br />
      <div className="wraper">
        <Head>
          <title>Himanshu Kumar | Projects</title>
          <meta name="keywords" />
        </Head>
        <div className="proj1">
          <Image id="mapp" src="/musicApp.png" width={350} height={220} />
          <div className="proj1sub">
            <h4>Music Streaming App </h4>
            <p
              style={{ fontSize: '0.9rem', opacity: '0.7', lineHeight: '24px' }}
            >
              An UI design which consists of multiple screens for a music
              streaming app.
            </p>
            <br />
            <div className="btn">
              <a
                href="https://www.behance.net/gallery/127528051/Music-app-UIUX-design"
                id="uibutton"
              >
                Visit
              </a>
            </div>
          </div>
        </div>

        <div className="proj1">
          <Image id="mapp" src="/gift.png" width={350} height={220} />
          <div className="proj1sub">
            <h4>Gift Card </h4>
            <p
              style={{ fontSize: '0.9rem', opacity: '0.7', lineHeight: '24px' }}
            >
              A graphic design of a Gift Card. Made with Figma
            </p>
            <br />
            <div className="btn">
              <a
                href="https://dribbble.com/shots/17047348-Giftcard"
                id="uibutton"
              >
                Visit
              </a>
            </div>
          </div>
        </div>

        <div className="proj1">
          <Image id="mapp" src="/blogg.png" width={350} height={220} />
          <div className="proj1sub">
            <h4>Minimilistic Blog design </h4>
            <p
              style={{ fontSize: '0.9rem', opacity: '0.7', lineHeight: '24px' }}
            >
              Minimilistic Blog design for both website and mobile.
            </p>
            <br />
            <div className="btn">
              <a
                href="https://www.behance.net/gallery/134772015/Minimalistic-Blog-design"
                id="uibutton"
              >
                Visit
              </a>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />

      <h1 style={{ fontSize: '3rem' }}>Web Development projects</h1>
      <br />
      <div className="webdev">
        <div className="proj2">
          <Image id="mapp" src="/fashion.png" width={350} height={180} />
          <div className="proj1sub">
            <h4>Fashion website </h4>
            <p
              style={{ fontSize: '0.9rem', opacity: '0.7', lineHeight: '24px' }}
            >
              A fashion based website created using React. My first project
              using React. Have a look
            </p>
            <br />
            <div className="wrapbtn">
              <div className="btn">
                <a href="https://github.com/HK24-HIMANSHU/Vogue" id="uibutton">
                  Code
                </a>
              </div>
              <div className="btn">
                <a href="https://vogue-seven.vercel.app/" id="uibutton">
                  Visit
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="proj2">
          <Image id="mapp" src="/Air.png" width={450} height={220} />
          <div className="proj1sub">
            <h4>Scrolling Animation</h4>
            <p
              style={{ fontSize: '0.9rem', opacity: '0.7', lineHeight: '24px' }}
            >
              Used Javascript to create a stunning scrolling effect. Have a look
            </p>
            <br />
            <div className="wrapbtn">
              <div className="btn">
                <a
                  href="https://github.com/HK24-HIMANSHU/scrollanimation"
                  id="uibutton"
                >
                  Code
                </a>
              </div>
              <div className="btn">
                <a href="https://scrollanimation.vercel.app/" id="uibutton">
                  Visit
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
    </div>
  );
};

export default Projects;
