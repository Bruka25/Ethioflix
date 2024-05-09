import React from "react";
import { Link } from "react-router-dom";
import "./landing.css";
import image from "../images/photo-1489599849927-2ee91cede3ba.avif";
function Landing() {
  return (
    <div>
      <head>
        <title>Ethioflix</title>
        <link rel="stylesheet" type="text/css" href="css/styles.css" />
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.2/css/font-awesome.min.css"
        />

        <link
          href="https://fonts.googleapis.com/css?family=Montserrat:200,200i,300,300i,400,600,600i,700,700i,800,800i,900,900i&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <div className="outer-wrapper">
          <section className="main-highlight-wrapper">
            <div className="internal-wrapper">
              <div className="model"></div>

              <div className="product-title">EthioFLIX</div>

              <div className="brief-description">
                Elevating Ethiopian Cinema, Anytime, Anywhere.
              </div>

              <div className="links-wrapper">
                <ul>
                  <li>
                    <li>
                      <Link to="/signup">Get started</Link>
                    </li>
                  </li>
                  <li>
                    <li>
                      <Link to="/about">About</Link>
                    </li>
                  </li>
                </ul>
              </div>

              <div className="main-image-wrapper">
                <img src={image} alt="image" />
              </div>
            </div>
          </section>

          <section className="second-hightlight-wrapper">
            <div className="internal-wrapper">
              <div className="title-wraper">Seamless Streaming Experience</div>

              <div className="description-wrapper">
                Enjoy high-quality streaming with minimal buffering, ensuring a
                smooth viewing experience for users across different devices and
                internet connections.
              </div>

              <div className="price-wrapper"></div>

              <div className="links-wrapper">
                <ul></ul>
              </div>
            </div>
          </section>

          <section className="third-highlight-wrapper">
            <div className="internal-wrapper">
              <div className="title-wraper">Personalized Recommendations</div>
              <div className="description-wrapper">
                Receive tailored movie recommendations based on viewing history
                and preferences, making it easier to discover new Ethiopian
                films that resonate with individual tastes and interests.
              </div>
              <div className="price-wrapper"></div>
              <div className="links-wrapper">
                <ul></ul>
              </div>
            </div>
          </section>

          <section className="fourth-heghlight-wrapper">
            <div className="left-side-wrapper">
              <div className="top-logo-wrapper">
                <div className="logo-wrapper">
                  <img />
                </div>
              </div>
              <div className="description-wraper"></div>
              <div className="links-wrapper">
                <ul></ul>
              </div>
            </div>
            <div className="right-side-wrapper">
              <div className="top-logo-wrapper">
                <div className="logo-wrapper">
                  <img />
                </div>
              </div>
              <div className="description-wraper"></div>
              <div className="links-wrapper">
                <ul></ul>
              </div>
            </div>
          </section>
          <section className="fifth-heghlight-wrapper">
            <div className="left-side-wrapper">
              <div className="top-logo-wrapper">
                <div className="logo-wrapper">
                  <img />
                </div>
              </div>

              <div className="tvshow-logo-wraper">
                <img />
              </div>

              <div className="watch-more-wrapper"></div>
            </div>
            <div className="right-side-wrapper">
              <div className="top-logo-wrapper">
                <div className="logo-wrapper">
                  Extensive Ethiopian Cinema Library
                </div>
              </div>

              <div className="description-wraper">
                <b>
                  Access a vast collection of Ethiopian movies, spanning various
                  genres and eras, to celebrate and preserve the rich cultural
                  heritage of Ethiopian cinema.
                </b>
              </div>

              <div className="links-wrapper">
                <ul></ul>
              </div>
            </div>
          </section>
          <section className="sixth-heghlight-wrapper">
            <div className="left-side-wrapper">
              <div className="model"></div>

              <div className="description-wraper"></div>

              <div className="links-wrapper">
                <ul></ul>
              </div>
            </div>
            <div className="right-side-wrapper">
              <div className="top-logo-wrapper">
                <div className="logo-wrapper">
                  <img />
                </div>
              </div>

              <div className="description-wraper"></div>

              <div className="links-wrapper">
                <ul></ul>
              </div>
            </div>
          </section>
        </div>
      </body>
    </div>
  );
}

export default Landing;
