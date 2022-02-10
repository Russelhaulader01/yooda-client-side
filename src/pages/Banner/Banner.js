import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-text animate__animated animate__backInLeft">
        <div className="main_title">
          <h1 className="text-center text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit
          </h1>
          <p className="text-white py-3">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem,
            modi?
          </p>
        </div>
        {/* <div className="input-group my-4 search_box">
          <input
            type="text"
            className="search_input"
            placeholder="search here"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
          <div>
            <span className="search_icon">
              {" "}
              <i className="fas fa-search"></i>
            </span>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Banner;
