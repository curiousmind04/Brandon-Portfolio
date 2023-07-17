import { useState } from "react";

import classes from "./Projects.module.css";

const projects = [
  {
    id: 1,
    title: "Entertainment Web App",
    category: "Fullstack",
    image: "entertainment-web-app.png",
    links: {
      live: "https://entertainment-web-app-reactts-c04.netlify.app/",
      frontendCode:
        "https://github.com/curiousmind04/Entertainment-Web-App-React-TS",
      backendCode:
        "https://github.com/curiousmind04/Entertainment-Web-App-Backend-TS",
      overview:
        "https://www.youtube.com/watch?v=RMqOIlCNcdI&ab_channel=BrandonCBH",
    },
    description:
      "I used React, TypeScript, Node, Express, MongoDB, Vite, CSS Modules, Netlify for frontend deployment, and Render for backend deployment. You can login or sign up, and there is demo credentials to try out the application without having to sign up. You can add/remove bookmarks from all movies and TV series, and you can search for relevant shows on all pages.",
  },
  {
    id: 2,
    title: "JourneyRV",
    category: "Fullstack",
    image: "journeyrv.png",
    links: {
      live: "https://journey-rv.vercel.app/",
      frontendCode: "https://github.com/curiousmind04/JourneyRV",
      overview:
        "https://www.youtube.com/watch?v=CoKRjuikzuw&ab_channel=BrandonCBH",
    },
    description:
      "I used NextJS 13, React, TypeScript, MongoDB, Prisma, Zustand, Cloudinary, NextAuth, CSS Modules, and Vercel for deployment. This project is essentially Airbnb, but for RV rentals. It is also fully responsive. You can create/delete RV listings, favorite listings, make reservations on listings, cancel reservations, and filter listings by the various filter options.",
  },
  {
    id: 3,
    title: "Connect Four",
    category: "Frontend",
    image: "connect-four.png",
    links: {
      live: "https://connect-four-reactts-c04.netlify.app/",
      frontendCode:
        "https://github.com/curiousmind04/Connect-Four-Game-React-TS",
      overview:
        "https://www.youtube.com/watch?v=W5NneK7kmLI&ab_channel=BrandonCBH",
    },
    description:
      "I used React, TypeScript, Vite, CSS Modules, and I deployed it with Netlify.  You can play a game of Connect Four against another human player (alternating turns on the same computer), or you can choose to play against the computer which was a bonus option for this project. This fun game is one of my favorite projects!",
  },
  {
    id: 4,
    title: "REST Countries API",
    category: "Frontend",
    image: "rest-countries-api.png",
    links: {
      live: "https://countries-api-reactts-c04.netlify.app/",
      frontendCode:
        "https://github.com/curiousmind04/REST-Countries-API-React-TS",
      overview:
        "https://www.youtube.com/watch?v=VPJSru4IyyI&ab_channel=BrandonCBH",
    },
    description:
      "I used React, TypeScript, Vite, CSS Modules, the REST Countries API, and I deployed it with Netlify. You can see all countries on the homepage, search for a country, filter countries by region, visit country detail pages, click through to the border countries on the detail page, and toggle the color scheme between light and dark mode.",
  },
  {
    id: 5,
    title: "Devjobs Web App",
    category: "Frontend",
    image: "devjobs.png",
    links: {
      live: "https://devjobs-web-app-reactts-c04.netlify.app/",
      frontendCode: "https://github.com/curiousmind04/Devjobs-Web-App-React-TS",
      overview:
        "https://www.youtube.com/watch?v=j5Quwaor37A&ab_channel=BrandonCBH",
    },
    description:
      "I used React, TypeScript, Vite, CSS Modules, and I deployed it with Netlify. There is a theme toggle to switch between dark and light mode. The homepage contains the available jobs on the job board, and you can then visit the detail page for each job as well. You can use the filter inputs to narrow down your job search.",
  },
  {
    id: 6,
    title: "Arch Studio Website",
    category: "Frontend",
    image: "arch-studio.png",
    links: {
      live: "https://arch-studio-reactts-c04.netlify.app/",
      frontendCode:
        "https://github.com/curiousmind04/Arch-Studio-Website-React-TS",
      overview:
        "https://www.youtube.com/watch?v=DopRj6m_tKg&ab_channel=BrandonCBH",
    },
    description:
      "I used React, TypeScript, Vite, CSS Modules, React Leaflet for the map, and I deployed it with Netlify. You can navigate between the different pages to explore details about this fictional company, you can view the office locations on the generated map, and you can submit the contact form (which has the necessary validations).",
  },
  {
    id: 7,
    title: "My Portfolio",
    category: "Frontend",
    image: "portfolio.png",
    links: {
      live: "https://brandonbhangari.netlify.app/",
      frontendCode: "https://github.com/curiousmind04/Brandon-Portfolio",
      overview:
        "https://www.youtube.com/watch?v=xY45cLWBSR0&ab_channel=BrandonCBH",
    },
    description:
      "I used React, TypScript, Vite, CSS Modules, and I deployed it with Netlify. This project is my portfolio website that you are on right now! You can view my skills, projects (including links to video explanations), visit the links to my social accounts, and contact me through the form or email button. This project is an opportunity to show my potential.",
  },
];

const Projects = () => {
  const [openedInfo, setOpenedInfo] = useState<number[]>([]);

  const infoHandler = (num: number) => {
    setOpenedInfo((prevState) =>
      prevState.includes(num)
        ? prevState.filter((item) => item !== num)
        : prevState.concat(num)
    );
  };

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
              <button
                onClick={infoHandler.bind(null, project.id)}
                className={classes.descriptionBtn}
                hidden={!openedInfo.includes(project.id) ? false : true}
              >
                <img
                  src="/assets/icon-info.svg"
                  alt="info icon"
                  className={classes.infoIcon}
                />
              </button>
            </div>
            <ul
              className={
                !openedInfo.includes(project.id)
                  ? classes.links
                  : classes.hidden
              }
            >
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
                  <img src="/assets/icon-github.svg" alt="github icon" />
                  {project.links.backendCode ? "Frontend Code" : "Github Code"}
                </a>
              </li>
              {project.links.backendCode && (
                <li>
                  <a
                    href={project.links.backendCode}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src="/assets/icon-github.svg" alt="github icon" />
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
            <div
              className={
                openedInfo.includes(project.id) ? classes.info : classes.hidden
              }
              hidden={!openedInfo.includes(project.id) ? true : false}
            >
              <p>{project.description}</p>
              <button onClick={infoHandler.bind(null, project.id)}>
                <img
                  src="/assets/icon-close.svg"
                  alt="close icon"
                  className={classes.close}
                />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
