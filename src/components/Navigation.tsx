import { useState } from "react";

import classes from "./Navigation.module.css";

const Nav = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  window.addEventListener("scroll", () => {
    const currentScroll = window.scrollY;
    if (currentScroll > 0) {
      setHasScrolled(true);
    } else {
      setHasScrolled(false);
    }
  });

  return (
    <>
      <header
        className={
          hasScrolled ? classes.glossyHeader : classes.transparentHeader
        }
      >
        <h1>
          <span>Brandon</span> <span>Bhangari</span>
        </h1>
        <button
          className={classes.hamburger}
          onClick={() => setMobileMenu(true)}
          hidden={hasScrolled ? false : true}
        >
          <img src="/assets/icon-hamburger.svg" alt="hamburger icon" />
        </button>
        <nav
          className={classes.desktopLinks}
          hidden={hasScrolled ? true : false}
        >
          <ul className={classes.list}>
            <li>
              <a href="#intro" onClick={() => setMobileMenu(false)}>
                Intro
              </a>
            </li>
            <li>
              <a href="#skills" onClick={() => setMobileMenu(false)}>
                Skills
              </a>
            </li>
            <li>
              <a href="#projects" onClick={() => setMobileMenu(false)}>
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" onClick={() => setMobileMenu(false)}>
                Contact
              </a>
            </li>
          </ul>
        </nav>
        {/* <div className={classes.pattern1}></div>
      <div className={classes.pattern2}></div> */}
      </header>
      <div
        className={classes.backdrop}
        hidden={!mobileMenu ? true : false}
        onClick={() => setMobileMenu(false)}
      ></div>
      <nav className={classes.links} hidden={!mobileMenu ? true : false}>
        <button className={classes.close} onClick={() => setMobileMenu(false)}>
          <img src="/assets/icon-close.svg" alt="close icon" />
        </button>
        <ul className={classes.list}>
          <li>
            <a href="#intro" onClick={() => setMobileMenu(false)}>
              Intro
            </a>
          </li>
          <li>
            <a href="#skills" onClick={() => setMobileMenu(false)}>
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" onClick={() => setMobileMenu(false)}>
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" onClick={() => setMobileMenu(false)}>
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;