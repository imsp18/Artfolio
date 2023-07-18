import React from "react";
import "./learn-hero.css";
import img1 from "./assets/Image.svg";
import img2 from "./assets/Image2.svg";
import img3 from "./assets/Image1.svg";
import arrow from "./assets/Arrow Icon.svg";
import { NavLink } from "react-router-dom";
// import YouTubePlayer from "./video1";

const Courses = () => {
  return (
    <div className="courses-container">
      <div className="row-1">
        <div className="course-1">
          <div className="course-info">
            <div className="course-img">
              <img src={img1} alt="" />
            </div>
            <div className="course-text">
              <h1>Figma Basics</h1>
              <p>
                Dive into the fundamentals of Figma and elevate your design
                skills with our comprehensive course.
              </p>
            </div>
            <div className="course-detail">
              <div className="course-stats">
                <h1>Artfolio</h1>
                <p>May 25th 2023</p>
              </div>
              <div className="course-button">
                <NavLink to="/course1">
                  <img src={arrow} alt="">
                    {/* <YouTubePlayer /> */}
                  </img>
                </NavLink>
                {/* <Outlet /> */}
              </div>
            </div>
          </div>
        </div>
        <div className="course-2">
          <div className="course-info">
            <div className="course-img">
              <img src={img2} alt="" />
            </div>
            <div className="course-text">
              <h1>UX Research</h1>
              <p>
                Explore the world of UX research and unlock valuable insights
                with our concise course preview.
              </p>
            </div>
            <div className="course-detail">
              <div className="course-stats">
                <h1>Artfolio</h1>
                <p>May 25th 2023</p>
              </div>
              <div className="course-button">
                <NavLink to="/course2">
                  <img src={arrow} alt="" />
                </NavLink>
                {/* <Outlet /> */}
              </div>
            </div>
          </div>
        </div>
        <div className="course-3">
          <div className="course-info">
            <div className="course-img">
              <img src={img3} alt="" />
            </div>
            <div className="course-text">
              <h1>Color Theory</h1>
              <p>
                Explore the world of color theory and elevate your design
                aesthetics with our captivating course preview.
              </p>
            </div>
            <div className="course-detail">
              <div className="course-stats">
                <h1>Artfolio</h1>
                <p>June 3rd 2023</p>
              </div>
              <div className="course-button">
                <NavLink to="/course3">
                  <img src={arrow} alt="" />
                </NavLink>
                {/* <Outlet /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
