import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function Page1() {
  return (
    <div className="container">
      <div className="container__page1">
        <div className="left">
          <div className="info">
            <h2>Be better at DSA & CP</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
            <span className="buttons">
              <button className="buttons_join-now">
                <span>Join now</span>
                <FontAwesomeIcon icon={faArrowRight} />
              </button>
              <button className="buttons_view-cur">View Curriculum</button>
            </span>
            <div className="grid">
              <div>
                <div className="rectangle">
                  <img src="/Rectangle88.png" alt="" />
                </div>
                <span>Lorem ipsum dolor sit amet</span>
              </div>
              <div>
                <div className="rectangle">
                  <img src="/Rectangle88.png" alt="" />
                </div>
                <span>Lorem ipsum dolor sit amet</span>
              </div>
              <div>
                <div className="rectangle">
                  <img src="/Rectangle88.png" alt="" />
                </div>
                <span>Lorem ipsum dolor sit amet</span>
              </div>
              <div>
                <div className="rectangle">
                  <img src="/Rectangle88.png" alt="" />
                </div>
                <span>Lorem ipsum dolor sit amet</span>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <img src="/page1.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Page1;
