import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function Page2() {
  return (
    <div className="container">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1920"
        height="1195"
        viewBox="0 0 1920 1195"
        fill="none"
        className="svg"
      >
        <path
          d="M1920 0C1515 719 540 830 0 830V1195H1920V0Z"
          fill="url(#paint0_linear_222_378)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_222_378"
            x1="960"
            y1="0"
            x2="960"
            y2="1195"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#F7FAFF" />
            <stop offset="1" stop-color="#E8F0FF" stop-opacity="0" />
          </linearGradient>
        </defs>
      </svg>
      <div className="container__page2">
        <main>
          <h1>
            Invest in skills,
            <br />
            <span>earn 10X</span> of what you paid.
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <div className="grid">
            <div className="grid__item1">
              <div className="rectangle">
                {" "}
                <img src="/Rectangle88.png" alt="" />
              </div>
              <div className="text">
                <span>1.2 Cr/Year</span>
                highest fresher package
              </div>
            </div>
            <div className="grid__item2">
              <div className="rectangle">
                {" "}
                <img src="/Rectangle88.png" alt="" />
              </div>
              <div className="text">
                <span>Multiple {"<"}100 Ranks</span>
                in kickstart last year
              </div>
            </div>
            <div className="grid__item3">
              <div className="rectangle">
                {" "}
                <img src="/Rectangle88.png" alt="" />
              </div>
              <div className="text">
                <span>1000+ Offers</span>
                from top companies
              </div>
            </div>
            <div className="grid__item3">
              <div className="rectangle">
                {" "}
                <img src="/Rectangle88.png" alt="" />
              </div>
              <div className="text">
                <span>Trusted by IITians</span>
                for their career prep
              </div>
            </div>
          </div>
        </main>

        <aside>
          <div className="top">
            <div className="absolute-img">
              <img className="absolute" src="/Frame215.png" alt="" />
            </div>
            <div className="content">
              <span className="text">Premium Victory Batch</span>
              <span className="original-amount">₹19,999</span>
              <span className="discounted-amount">₹13,999</span>
            </div>
            <div className="logo"></div>
          </div>
          <div className="bottom">
            <div className="item1">
              <div className="rectangle">
                {" "}
                <img src="/Rectangle88.png" alt="" />
              </div>
              <span>100+ Hrs Live Content</span>
            </div>
            <div className="item2">
              <div className="rectangle">
                {" "}
                <img src="/Rectangle88.png" alt="" />
              </div>
              <span>50+ Hrs Contest</span>
            </div>
            <div className="item3">
              <div className="rectangle">
                {" "}
                <img src="/Rectangle88.png" alt="" />
              </div>
              <span>500+ Problems</span>
            </div>
            <div className="item4">
              <div className="rectangle">
                {" "}
                <img src="/Rectangle88.png" alt="" />
              </div>
              <span>
                Includes an interview bootcamp and access to a mentor network
              </span>
            </div>
            <div className="item5">
              <div className="rectangle">
                {" "}
                <img src="/Rectangle88.png" alt="" />
              </div>
              <span>
                Enjoy access to our content for one year (paid extensions
                available)
              </span>
            </div>
            <div className="item6">
              <div className="rectangle">
                {" "}
                <img src="/Rectangle88.png" alt="" />
              </div>
              <span>
                Flexible payment options, including no-cost EMI, are available.
              </span>
            </div>
            <button className="join-now">
              <span>Join now</span>
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default Page2;
