import { CgFigma } from 'react-icons/cg';
import { FaReact, FaDatabase, FaAws } from 'react-icons/fa';

const Superpower = () => {
  return (
    <div className="mainh">
      <div className="sp">
        <div className="uiux">
          <CgFigma size="2.5rem" />
          <h4>UI/UX design</h4>
          <p style={{ fontSize: '0.9rem', opacity: '0.7', lineHeight: '24px' }}>
            With some industry level experience <br /> in UI/UX design, along
            with a<br /> few completed projects.
          </p>
        </div>
        <div className="uiux">
          <FaReact size="2.5rem" />
          <h4>Frontend development</h4>
          <p style={{ fontSize: '0.9rem', opacity: '0.7', lineHeight: '24px' }}>
            Intermediate knowledge in HTML,CSS and React. <br /> Currently
            learning React js, javascript, <br /> Next js by developing
            projects.
          </p>
        </div>
        <div className="uiux">
          <FaDatabase size="2.5rem" />
          <h4>Backend development</h4>
          <p style={{ fontSize: '0.9rem', opacity: '0.7', lineHeight: '24px' }}>
            Some knowledge about Java and mySql. <br /> Created a few University
            Projects
          </p>
        </div>
      </div>
      <br />
      <div className="sp2">
        <div className="uiux">
          <FaAws size="2.5rem" />
          <h4>Cloud computing</h4>
          <p style={{ fontSize: '0.9rem', opacity: '0.7', lineHeight: '24px' }}>
            Completed Nasscom gold <br /> certification for Aws Cloud <br />
            Practitioner, Also participated and <br /> completed 30-days Google
            cloud event.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Superpower;
