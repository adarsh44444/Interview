import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { AiFillInstagram, AiFillYoutube, AiFillLinkedin } from "react-icons/ai";
import { FaGitSquare } from "react-icons/fa";
import { Context } from "../../main";

const Footer = () => {
  const isDashboard = useLocation("http://localhost:5173/dashboard");
  const { mode, setMode } = useContext(Context);

  return (
    <footer
      className={
        isDashboard.pathname === "/dashboard"
          ? "hideFooter"
          : mode === "light"
          ? "light-footer"
          : "dark-footer"
      }
    >
      <div className="container">
        <div className="about">
          <h3>About</h3>
          <p>
            
          </p>
          <p>
            <span>Email:</span>adarshsingh3002@gmail.com
          </p>
          <p>
            <span>Phone:</span>8210410930
          </p>
        </div>
        <div className="quick_links">
          <h3>Quick Links</h3>
          <ul>
            <Link to={"/"}>Home</Link>
            <Link to={"/blogs"}>Blogs</Link>
            <Link to={"/about"}>About</Link>
            <Link to={"/dashboard"}>Dashboard</Link>
          </ul>
        </div>
        
        <div className="news_letter">
          <div>
            <h3><a href="https://www.bbc.com/" target="blank">Tech News</a></h3>
            <h3><a href="https://www.bbc.com/" target="blank">Sports News</a></h3>
            <h3><a href="https://www.bbc.com/" target="blank">Political News</a></h3>
            <h3><a href="https://www.bbc.com/" target="blank">Economic News</a></h3>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="logo">DELTA <span>BLOGS</span></div>
        <div className="links">
          <Link to={"/"} target="_blank">
            <AiFillInstagram />
          </Link>
          <Link to={"/"} target="_blank">
            <FaGitSquare />
          </Link>
          <Link to={"https://github.com/adarsh44444/"} target="_blank">
            <AiFillYoutube />
          </Link>
          <Link to={"/"} target="_blank">
            <AiFillLinkedin />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
