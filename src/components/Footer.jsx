import React from "react";
import { FaUniversity, FaPhoneAlt } from "react-icons/fa";
import { IoIosLocate } from "react-icons/io";

export default function Footer() {
  return (
    <div className="body">
      <footer>
        <div className="container">
          <div className="first section">
            <h2>About Website</h2>
            <div className="content">
              <p>
                This website is developed by Bachelor students of ADA University
                and demonstrates a database about the world-ranked cinema works.
              </p>
            </div>
          </div>
          <div className="second section">
            <h2>Authors</h2>
            <p>Atilla SHARIFLI</p>
          </div>
          <div className="right section">
            <h2>Address</h2>
            <div className="content">
              <div className="address">
                <FaUniversity />
                <p className="text">ADA University</p>
              </div>
              <div className="phone">
                <FaPhoneAlt />
                <p className="text"> +994 12 437 32 35</p>
              </div>
              <div className="email">
                <IoIosLocate />
                <p className="text">
                  61 Ahmadbay Agha-Oglu Street, Baku, Azerbaijan, AZ1008
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="footer_bottom">
          <div className="cp">
            <div>
              <span>
                Powered By{" "}
                <a href="www.youtube.com">
                  © 2021 | All Rights Reserved | Made By Someone
                </a>
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
