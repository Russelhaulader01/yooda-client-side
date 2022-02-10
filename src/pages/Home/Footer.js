import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer mt-5 pt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="about text-justify">
              <h5>Hostel</h5>
              <p className="mb-3">
                Click on the Continents below, to view the <br /> hostels &
                budget hotels accommodation <br /> for regions and destinations
                by countries
              </p>
            </div>
          </div>
          <div className="col-md-2">
            <div className="service">
              <h4 className="fotter-title pb-2">Quick links</h4>
              <h6>Home</h6>
              <h6>About</h6>
              <h6>Rooms</h6>
              <h6>News</h6>
            </div>
          </div>
          <div className="col-md-3">
            <div className="service">
              <h4 className="fotter-title pb-2">Contact Us</h4>
              <div className="d-flex py-3">
                <i className="fas fa-location-arrow"></i>
                <h6 className="ms-4">Khulna,Bangladesh AZ 90995</h6>
              </div>
              <div className="d-flex pb-3">
                <i className="fas fa-phone"></i>
                <h6 className="ms-4 ">(329) 580-7077 (650) 382-5020</h6>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="follow">
              <h4 className="fotter-title pb-2">Follow Us</h4>
              <h6>Venenatis urna</h6>
              <h6> cursus eget nunc</h6>
              <h6>scelerisque</h6>
            </div>
            <div className="icon py-1">
              <span>
                <i className="fab fa-facebook facebook"></i>
              </span>
              <span>
                <i className="fab fa-twitter-square twitter"></i>
              </span>
              <span>
                <i className="fab fa-youtube youtube"></i>
              </span>
            </div>
          </div>

          <small className="text-center py-3">
            <hr />
            Copyright &copy; 2022 | Built with Exporso by Rasel.
          </small>
        </div>
      </div>
    </div>
  );
};

export default Footer;
