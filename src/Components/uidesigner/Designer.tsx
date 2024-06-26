import React from "react";
import "./designer.css";
import { IoMdStar } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";

const Designer = () => {
  return (
    <div className="design-parent">
      <div className="color">
        <IoMdStar style={{ color: "#EAB308" }} />
        <IoMdStar style={{ color: "#EAB308" }} />
        <IoMdStar style={{ color: "#EAB308" }} />
        <IoMdStar style={{ color: "#EAB308" }} />
        <IoMdStar style={{ color: "#EAB308" }} />
        <IoMdStar style={{ color: "#EAB308" }} />

        <div className="arrow-container">
          <FaArrowLeft
            className="arrow arrow-right"
            style={{ color: "black" }}
          />
          <div>
            <div className="arrow-container">
              <FaArrowRight
                className="arrow arrow-left"
                style={{ color: "black" }}
              />{" "}
              <div>
                <p>
                  “You made it so simple. My new site is so much <br />
                  faster and easier to work with than my old site. I <br />
                  just choose the page, make the change.”
                </p>
                <div className="member">
                  <img src={require("../../assests/member-1.png")} alt="" />
                  <div>
                    <h5>Michael Johnson</h5>
                    <h6>UI Designer</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Designer;
