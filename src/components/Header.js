import React, { useEffect, useRef } from "react";
import { Container, Row } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";

const nav__links = [
  {
    path: "/",
    display: "Home",
  },
  {
    path: "/about",
    display: "About",
  },
  {
    path: "/",
    display: "Plans",
  },
];

const Header = () => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);

  useEffect(() => {
    const stickyHeaderFunc = () => {
      const headerElement = headerRef.current;
      if (headerElement) {
        window.addEventListener("scroll", () => {
          if (
            document.body.scrollTop > 80 ||
            document.documentElement.scrollTop > 80
          ) {
            headerElement.classList.add("sticky__header");
          } else {
            headerElement.classList.remove("sticky__header");
          }
        });
      }
    };

    stickyHeaderFunc();

    return () => {
      window.removeEventListener("scroll", stickyHeaderFunc);
    };
  }, []);

  const toggleMenu = () => {
    const menuElement = menuRef.current;
    if (menuElement) {
      menuElement.classList.toggle("show__menu");
    }
  };

  return (
    <header className="header" ref={headerRef}>
      <Container>
        <Row>
          <div className="nav__wrapper d-flex align-items-center justify-content-between">
            <Link to="/" style={{textDecoration:"none"}} className="logo">
              <span className="logo-text">
                Dream<span className="logo-orange">Go</span>
              </span>
            </Link>
            <div className="navigation" ref={menuRef} onClick={toggleMenu}>
              <ul className="menu d-flex align-items-center gap-5">
                {nav__links.map((item, index) => (
                  <li className="nav__item" key={index}>
                    <NavLink to={item.path}>{item.display}</NavLink>
                  </li>
                ))}
              </ul>
            </div>
            <div className="nav__right d-flex align-items-center gap-4">
              <span className="mobile__menu" onClick={toggleMenu}>
                <i className="ri-menu-line"></i>
              </span>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
