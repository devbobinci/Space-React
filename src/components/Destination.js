import React, { useState } from "react";

import moon from "../assets/destination/image-moon.png";
import mars from "../assets/destination/image-mars.png";
import europa from "../assets/destination/image-europa.png";
import titan from "../assets/destination/image-titan.png";

import "../styles/destination.scss";

const Destination = ({ open }) => {
  const [selectPlanet, setSelectedPlanet] = useState(0);

  const planets = [
    {
      name: "Moon",
      img: moon,
      description: `See our planet as you’ve never seen it before. A perfect relaxing trip away to help 
      regain perspective and come back refreshed. While you’re there, take in some history 
      by visiting the Luna 2 and Apollo 11 landing sites.`,
      avgDistance: "384,400 km",
      travelTime: "3 days",
    },
    {
      name: "Mars",
      img: mars,
      description: `Don’t forget to pack your hiking boots. You’ll need them to tackle
      Olympus Mons, the tallest planetary mountain in our solar system.
      It’s two and a half times the size of Everest!`,
      avgDistance: "225 mil. km",
      travelTime: "9 months",
    },
    {
      name: "Europa",
      img: europa,
      description: `The smallest of the four Galilean moons orbiting Jupiter, Europa is a 
      winter lover’s dream. With an icy surface, it’s perfect for a bit of 
      ice skating, curling, hockey, or simple relaxation in your snug 
      wintery cabin.`,
      avgDistance: "628 mil. km",
      travelTime: "3 years",
    },
    {
      name: "Titan",
      img: titan,
      description: `The only moon known to have a dense atmosphere other than Earth, Titan 
    is a home away from home (just a few hundred degrees colder!). As a 
    bonus, you get striking views of the Rings of Saturn.`,
      avgDistance: "1,6 bil. km",
      travelTime: "7 years",
    },
  ];

  return (
    <div className="destination__container background">
      <div
        className={
          open
            ? "destination__content container blured"
            : "destination__content container"
        }
      >
        <div className="title__container">
          <h2 className="title">
            <span className="page__number">01</span>
            Pick your destination
          </h2>
        </div>
        <div className="page__content">
          <div className="planet__container">
            <img
              src={planets[selectPlanet].img}
              alt="moon"
              className="planet__img"
            />
          </div>

          <div className="page__container">
            <ul className="planets__list">
              <li className="list__item">
                <a
                  href="#"
                  onClick={() => setSelectedPlanet(0)}
                  className={selectPlanet === 0 ? "link active" : "link"}
                >
                  moon
                </a>
              </li>
              <li className="list__item">
                <a
                  href="#mars"
                  onClick={() => setSelectedPlanet(1)}
                  className={selectPlanet === 1 ? "link active" : "link"}
                >
                  mars
                </a>
              </li>
              <li className="list__item">
                <a
                  href="#europa"
                  onClick={() => setSelectedPlanet(2)}
                  className={selectPlanet === 2 ? "link active" : "link"}
                >
                  europa
                </a>
              </li>
              <li className="list__item">
                <a
                  href="#titan"
                  onClick={() => setSelectedPlanet(3)}
                  className={selectPlanet === 3 ? "link active" : "link"}
                >
                  titan
                </a>
              </li>
            </ul>
            <h2 className="planet__title">
              {planets[selectPlanet].name.toUpperCase()}
            </h2>
            <p className="planet__desc description">
              {planets[selectPlanet].description}
            </p>
            <div className="planet-travel">
              <div className="distance__container">
                <h5 className="title">Avg. Distance</h5>
                <h3 className="distance amount">
                  {planets[selectPlanet].avgDistance}
                </h3>
              </div>
              <div className="avg-time__container">
                <h5 className="title">Est. travel time</h5>
                <h3 className="time amount">
                  {planets[selectPlanet].travelTime}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
