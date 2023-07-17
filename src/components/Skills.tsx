import classes from "./Skills.module.css";

const Skills = () => {
  return (
    <section className={classes.container} id="skills">
      <div>
        <div className={classes.icons}>
          <img src="/assets/skills/web-dev.svg" />
          <img src="/assets/skills/keyboard.svg" />
          <img src="/assets/skills/mouse.svg" />
        </div>
        <h2>Skills and Tools</h2>
      </div>

      <div className={classes.skills}>
        <img src="/assets/skills/JavaScript.svg" />
        <img src="/assets/skills/TypeScript.svg" />
        <img src="/assets/skills/React-Light.svg" />
        <img src="/assets/skills/VSCode-Light.svg" />

        <img src="/assets/skills/HTML.svg" />
        <img src="/assets/skills/CSS.svg" />
        <img src="/assets/skills/Sass.svg" />
        <img src="/assets/skills/Bootstrap.svg" />
        <img src="/assets/skills/TailwindCSS-Light.svg" />

        <img src="/assets/skills/NodeJS-Light.svg" />
        <img src="/assets/skills/ExpressJS-Light.svg" />
        <img src="/assets/skills/MongoDB.svg" />
        <img src="/assets/skills/NextJS-Light.svg" />
        <img src="/assets/skills/Prisma.svg" />

        <img src="/assets/skills/Git.svg" />
        <img src="/assets/skills/Github-Light.svg" />
        <img src="/assets/skills/Webpack-Light.svg" />
        <img src="/assets/skills/Vite-Light.svg" />

        <img src="/assets/skills/Redux.svg" />
        <img src="/assets/skills/Postman.svg" />
        <img src="/assets/skills/Firebase-Light.svg" />
        <img src="/assets/skills/Figma-Light.svg" />

        <img src="/assets/skills/Netlify-Light.svg" />
        <img src="/assets/skills/Vercel-Light.svg" />
        <img src="/assets/skills/Heroku.svg" />
        <img src="/assets/skills/Bash-Light.svg" />
        <img src="/assets/display-code.svg" className={classes.screen} />
      </div>
    </section>
  );
};

export default Skills;
