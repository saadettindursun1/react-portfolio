/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import appData from "../../data/app.json";
import { handleDropdown, handleMobileDropdown } from "../../common/navbar";

const Navbar = ({ lr, nr, theme }) => {
  return (
    <nav
      ref={nr}
      className={`navbar navbar-expand-lg change ${
        theme === "themeL" ? "light" : ""
      }`}
    >
      <div className="container">
        <Link href="/">
          <a className="logo">
            {theme ? (
              theme === "themeL" ? (
                <img ref={lr} src={appData.darkLogo} alt="logo" />
              ) : (
                <img ref={lr} src={appData.lightLogo} alt="logo" />
              )
            ) : (
              <img ref={lr} src={appData.lightLogo} alt="logo" />
            )}
          </a>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          onClick={handleMobileDropdown}
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="icon-bar">
            <i className="fas fa-bars"></i>
          </span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">


            <li className="nav-item">
              <Link href={`tel:05394940123`}>
                <a className="nav-link">Beni Ara</a>
              </Link>
            </li>

            <li className="nav-item">
              <Link href={`#ilgi-alanlarim`}>
                <a className="nav-link">İlgi Alanlarım</a>
              </Link>
            </li>



            <li className="nav-item">
              <Link href={`#projelerim`}>
                <a className="nav-link">Projelerim</a>
              </Link>
            </li>


            
            <li className="nav-item">
              <Link href={`#referanslarim`}>
                <a className="nav-link">Referanslarım</a>
              </Link>
            </li>


            <li className="nav-item">
              <Link href={`#blog-yazilarim`}>
                <a className="nav-link">Blog Yazıları</a>
              </Link>
            </li>

            <li className="nav-item">
              <Link href={`#iletisim`}>
                <a className="nav-link">İletişim</a>
              </Link>
            </li>



          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
