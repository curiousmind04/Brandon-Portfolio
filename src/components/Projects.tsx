import classes from "./Projects.module.css";

const projects = [
  {
    id: 1,
    title: "Entertainment Web App",
    category: "Fullstack",
    image: "prj-1-mobile.png",
    links: {
      live: "https://entertainment-web-app-reactts-c04.netlify.app/",
      frontendCode:
        "https://github.com/curiousmind04/Entertainment-Web-App-React-TS",
      backendCode:
        "https://github.com/curiousmind04/Entertainment-Web-App-Backend-TS",
      overview:
        "https://www.youtube.com/watch?v=RMqOIlCNcdI&ab_channel=BrandonCBH",
    },
  },
  {
    id: 2,
    title: "Connect Four",
    category: "Frontend",
    image: "prj-2-mobile.png",
    links: {
      live: "https://connect-four-reactts-c04.netlify.app/",
      frontendCode:
        "https://github.com/curiousmind04/Connect-Four-Game-React-TS",
      overview:
        "https://www.youtube.com/watch?v=W5NneK7kmLI&ab_channel=BrandonCBH",
    },
  },
  {
    id: 3,
    title: "REST Countries API",
    category: "Frontend",
    image: "prj-3-mobile.png",
    links: {
      live: "https://countries-api-reactts-c04.netlify.app/",
      frontendCode:
        "https://github.com/curiousmind04/REST-Countries-API-React-TS",
      overview:
        "https://www.youtube.com/watch?v=RMqOIlCNcdI&ab_channel=BrandonCBH",
    },
  },
  {
    id: 4,
    title: "Devjobs Web App",
    category: "Frontend",
    image: "prj-4-mobile.png",
    links: {
      live: "https://devjobs-web-app-reactts-c04.netlify.app/",
      frontendCode: "https://github.com/curiousmind04/Devjobs-Web-App-React-TS",
      overview:
        "https://www.youtube.com/watch?v=j5Quwaor37A&ab_channel=BrandonCBH",
    },
  },
];

const Projects = () => {
  return (
    <section className={classes.container} id="projects">
      <h2>Projects</h2>
      <div className={classes.projects}>
        {projects.map((project) => (
          <div className={classes.project} key={project.id}>
            <div className={classes.title}>
              <h3>{project.title}</h3>
              <div className={classes.category}>{project.category}</div>
            </div>
            <div className={classes.image}>
              <img
                src={`/assets/projects/${project.image}`}
                alt="project image"
              />
            </div>
            <ul className={classes.links}>
              <li>
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="/assets/search.svg" alt="search icon" />
                  View Project
                </a>
              </li>
              <li>
                <a
                  href={project.links.frontendCode}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="/assets/github.svg" alt="github icon" />
                  Frontend Code
                </a>
              </li>
              {project.links.backendCode && (
                <li>
                  <a
                    href={project.links.backendCode}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src="/assets/github.svg" alt="github icon" />
                    Backend Code
                  </a>
                </li>
              )}
              <li>
                <a
                  href={project.links.overview}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="/assets/youtube.svg" alt="youtube icon" />
                  Project Overview
                </a>
              </li>
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
