import React, { useState } from "react";

import anousheh from "../assets/crew/image-anousheh-ansari.png";
import douglas from "../assets/crew/image-douglas-hurley.png";
import mark from "../assets/crew/image-mark-shuttleworth.png";
import victor from "../assets/crew/image-victor-glover.png";

import "../styles/crew.scss";

const Crew = ({ open }) => {
  const [settedCrewMember, setCrewMember] = useState(0);

  const crew = [
    {
      role: "Flight Engineer",
      name: "Anoushehe Ansari",
      description: `Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. 
    Ansari was the fourth self-funded space tourist, the first self-funded woman to 
    fly to the ISS, and the first Iranian in space.`,
      img: anousheh,
    },
    {
      role: "Commander",
      name: "Douglas Hurley",
      description: `Douglas Gerald Hurley is an American engineer, former Marine Corps pilot 
      and former NASA astronaut. He launched into space for the third time as 
      commander of Crew Dragon Demo-2.`,
      img: douglas,
    },
    {
      role: "Mission Specialist",
      name: "Mark Shuttleworth",
      description: `Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind 
      the Linux-based Ubuntu operating system. Shuttleworth became the first South 
      African to travel to space as a space tourist.`,
      img: mark,
    },
    {
      role: "Pilot",
      name: "Victor Glover",
      description: `Pilot on the first operational flight of the SpaceX Crew Dragon to the 
      International Space Station. Glover is a commander in the U.S. Navy where 
      he pilots an F/A-18.He was a crew member of Expedition 64, and served as a 
      station systems flight engineer. `,
      img: victor,
    },
  ];

  return (
    <div className="crew__container background">
      <div
        className={
          open ? "crew__content container blured" : "crew__content container"
        }
      >
        <div className="title__container">
          <h2 className="title">
            <span className="page__number">02</span>
            Meet your crew
          </h2>
        </div>

        <div className="page__content">
          <div className="person__container">
            <img
              src={crew[settedCrewMember].img}
              alt={crew[settedCrewMember.name]}
            />
          </div>

          <div className="page__container">
            <div className="person__info">
              <ul className="crew__list">
                <li className="list__item">
                  <a
                    href="#anousheh-ansari"
                    onClick={() => setCrewMember(0)}
                    className={settedCrewMember === 0 ? "link active" : "link"}
                  ></a>
                </li>
                <li className="list__item">
                  <a
                    href="#douglas-hurtley"
                    onClick={() => setCrewMember(1)}
                    className={settedCrewMember === 1 ? "link active" : "link"}
                  ></a>
                </li>
                <li className="list__item">
                  <a
                    href="#mark-shuttleworth"
                    onClick={() => setCrewMember(2)}
                    className={settedCrewMember === 2 ? "link active" : "link"}
                  ></a>
                </li>
                <li className="list__item">
                  <a
                    href="#victor-glover"
                    onClick={() => setCrewMember(3)}
                    className={settedCrewMember === 3 ? "link active" : "link"}
                  ></a>
                </li>
              </ul>

              <h3 className="person__role">{crew[settedCrewMember].role}</h3>
              <h2 className="person__name">{crew[settedCrewMember].name}</h2>
              <p className="person__desc description">
                {crew[settedCrewMember].description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Crew;
