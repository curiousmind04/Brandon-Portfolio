import classes from "./Intro.module.css";

const Intro = () => {
  return (
    <section className={classes.container} id="intro">
      <div className={classes.top}>
        <div>
          <div className={classes.portrait}>
            <img src="/assets/portrait.png" alt="portrait picture" />
          </div>
          <h2>
            <span>FullStack </span>
            <span className={classes.middle}>Software</span>
            <span> Engineer</span>
          </h2>
        </div>
        <div className={classes.socials}>
          <ul>
            <li>
              <a
                href="https://www.linkedin.com/in/brandon-bhangari/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/assets/linkedin.svg" alt="linkedin icon" />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/curiousmind04"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/assets/github.svg" alt="github icon" />
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/channel/UCyIq7vjHMbKCRaACOsuOkcA"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/assets/youtube.svg" alt="youtube icon" />
              </a>
            </li>
            <li>
              <a href="mailto:b6_10_94_furlonge@hotmail.com">
                <img src="/assets/mail.svg" alt="mail icon" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className={classes.info}>
        <div className={classes.benefit1}>
          <div className={classes.icons}>
            <img src="/assets/person-simple.svg" className={classes.icon} />
            <img src="/assets/display-code.svg" className={classes.icon} />
          </div>
          <h3>Who and What?</h3>
          <p>
            Hey, I am Brandon! Thanks for your visit and interest. I am a
            committed developer that is looking for a position to grow and
            contribute
          </p>
        </div>
        <div className={classes.benefit2}>
          <div className={classes.icons}>
            <img src="/assets/marker.svg" className={classes.icon} />
            <img src="/assets/time-twenty-four.svg" className={classes.icon} />
          </div>
          <h3>Where and When?</h3>
          <p>
            I am based in Toronto, ON. I can work on-site or remote. I am
            available immediately to dive into this exciting industry
          </p>
        </div>
        <div className={classes.benefit3}>
          <div className={classes.icons}>
            <img src="/assets/bulb.svg" className={classes.icon} />
            <img src="/assets/settings.svg" className={classes.icon} />
          </div>
          <h3>Why and How?</h3>
          <p>
            I can bring determination, productivity, and a passion for lifelong
            learning as I continue to reinforce my worth as a valuable asset to
            the team and company
          </p>
        </div>
      </div>
    </section>
  );
};

export default Intro;
