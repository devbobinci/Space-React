import React, { useState } from "react";
import { Route, Routes, Link } from "react-router-dom";

import Home from "./Home";
import Destination from "./Destination";
import Crew from "./Crew";
import Technology from "./Technology";

import logo from "../assets/shared/logo.svg";

import "../styles/navigation.scss";

const Navigation = () => {
  const [open, setOpen] = useState(false);

  const onLink = (e) => {
    setOpen(!open);
    document.querySelectorAll("nav .link").forEach((link) => {
      link.classList.remove("active");
    });
    e.target.parentElement.classList.add("active");
    e.target.classList.add("active");
  };

  return (
    <>
      <nav className="nav">
        <Link to="/" className="link">
          <img
            src={logo}
            alt="logo"
            className={open ? "logo blured" : "logo"}
            onClick={() => {
              document.querySelectorAll("nav .link").forEach((link) => {
                link.classList.remove("active");
              });
              document.querySelector(".home").classList.add("active");
            }}
          />
        </Link>
        <div
          onClick={() => setOpen(!open)}
          className={open ? "icon__container opened" : "icon__container"}
          role="menu"
        ></div>
        <ul className={open ? "nav__list opened" : "nav__list"}>
          <li className="list-item" onClick={onLink}>
            <Link to="/" className="link home active">
              <span className="link-number">00</span>Home
            </Link>
          </li>
          <li className="list-item" onClick={onLink}>
            <Link to="/destination" className="link destination">
              <span className="link-number">01</span>Destination
            </Link>
          </li>
          <li className="list-item" onClick={onLink}>
            <Link to="/crew" className="link crew">
              <span className="link-number">02</span>Crew
            </Link>
          </li>
          <li className="list-item" onClick={onLink}>
            <Link to="/technology" className="link technology">
              <span className="link-number">03</span>Technology
            </Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home open={open} />}></Route>
        <Route
          path="/destination"
          element={<Destination open={open} />}
        ></Route>
        <Route path="/crew" element={<Crew open={open} />}></Route>
        <Route path="/technology" element={<Technology open={open} />}></Route>
      </Routes>
    </>
  );
};

export default Navigation;
