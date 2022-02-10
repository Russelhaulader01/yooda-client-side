import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-text w-75 animate__animated animate__backInLeft">
        <div className="main_title  text-center">
          <h1 className=" text-white">
           Welcome to Yooda Hostel
          </h1>
          <p className="text-white py-3">
           Very easily you can select your meals form order foods. Sell all food and order now for your desire shift, date, by using your Roll number.
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
