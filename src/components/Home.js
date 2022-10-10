import React from "react";
import { Link } from "react-router-dom";

import "../styles/home.scss";

const Home = ({ open }) => {
  return (
    <div className="home__container">
      <div className={open ? "home__content blured" : "home__content"}>
        <h3 className="home-subtitle">So, you want to travel to</h3>
        <h1 className="home-title">Space</h1>
        <p className="home-text-content">
          Let's face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we'll give you a truly out of this world
          experience
        </p>
      </div>
      <div className={open ? "explore-btn blured" : "explore-btn"}>
        <Link
          to="/destination"
          className="link"
          onClick={() => {
            document.querySelectorAll(".link").forEach((link) => {
              link.classList.remove("active");
            });
            document.querySelector(".destination").classList.add("active");
          }}
        >
          Explore
        </Link>
      </div>
    </div>
  );
};

export default Home;
