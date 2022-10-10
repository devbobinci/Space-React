import React, { useState } from "react";

import launch from "../assets/technology/image-launch-vehicle-portrait.jpg";
import spaceport from "../assets/technology/image-spaceport-portrait.jpg";
import spacecapsule from "../assets/technology/image-space-capsule-portrait.jpg";

import "../styles/technology.scss";

const Technology = ({ open }) => {
  const [currentPage, setCurrentPage] = useState(0);

  const pageInfo = [
    {
      title: "Launch vehicle",
      description: `A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a 
    payload from Earth's surface to space, usually to Earth orbit or beyond. Our 
    WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, 
    it's quite an awe-inspiring sight on the launch pad!`,
      img: launch,
    },
    {
      title: "Spaceport",
      description: `A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, 
    by analogy to the seaport for ships or airport for aircraft. Based in the 
    famous Cape Canaveral, our spaceport is ideally situated to take advantage 
    of the Earth’s rotation for launch.`,
      img: spaceport,
    },

    {
      title: "Space capsule",
      description: `A space capsule is an often-crewed spacecraft that uses a blunt-body reentry 
    capsule to reenter the Earth's atmosphere without wings. Our capsule is where 
    you'll spend your time during the flight. It includes a space gym, cinema, 
    and plenty of other activities to keep you entertained.`,
      img: spacecapsule,
    },
  ];

  return (
    <div className="technology__container background">
      <div
        className={
          open
            ? "technology__content container blured"
            : "technology__content container"
        }
      >
        <div className="title__container">
          <h2 className="title">
            <span className="page__number">03</span>
            Space launch 101
          </h2>
        </div>

        <div className="page__content">
          <div className="img__container">
            <img
              src={pageInfo[currentPage].img}
              alt={pageInfo[currentPage].title}
            />
          </div>

          <div className="page__container">
            <ul className="page__list">
              <li
                className={
                  currentPage === 0 ? "list__item active" : "list__item"
                }
                onClick={() => setCurrentPage(0)}
              >
                <a className="link" href="#launch-vehicle">
                  1
                </a>
              </li>
              <li
                className={
                  currentPage === 1 ? "list__item active" : "list__item"
                }
                onClick={() => setCurrentPage(1)}
              >
                <a className="link" href="#spaceport">
                  2
                </a>
              </li>
              <li
                className={
                  currentPage === 2 ? "list__item active" : "list__item"
                }
                onClick={() => setCurrentPage(2)}
              >
                <a className="link" href="#space-capsule">
                  3
                </a>
              </li>
            </ul>

            <div className="page__info">
              <h3 className="page__subtitle">The terminilogy...</h3>
              <h1 className="page__title">{pageInfo[currentPage].title}</h1>
              <p className="page__desc description">
                {pageInfo[currentPage].description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technology;
