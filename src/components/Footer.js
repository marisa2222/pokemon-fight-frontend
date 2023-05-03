import React from "react";
import { MDBContainer, MDBFooter } from "mdbreact";
import "../styles/navbar.css";

const FooterPage = () => {
  return (
    <MDBFooter className="font-small">
      <MDBContainer>
        <div className="text-footer">
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3 footertop">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase mb-4">
                  <strong>Pokemon Universe</strong>
                </h6>
                <p>Enjoy your life with your favorite Pokemon!</p>
              </div>

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase mb-4">
                  <strong>Go to</strong>
                </h6>
                <p>
                  <a href="/LeaderBoard" className="text-reset">
                    LeaderBoard
                  </a>
                </p>
                <p>
                  <a href="/history" className="text-reset">
                    History
                  </a>
                </p>
                <p>
                  <a href="/contact" className="text-reset">
                    Contact
                  </a>
                </p>
              </div>

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase mb-4">
                  <strong>Useful links</strong>
                </h6>
                <p>
                  <a href="#!" className="text-reset">
                    Subscribe
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Settings
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Orders
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Help
                  </a>
                </p>
              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4 text-left">
                <h6 className="text-uppercase mb-4">
                  <strong>Contact</strong>
                </h6>
                <p>
                  <i className="fas fa-home me-3"></i> Berlin 12047, Germany
                </p>
                <p>
                  <i className="fas fa-envelope me-3"></i>
                  info@pokemon.com
                </p>
                <p>
                  <i className="fas fa-phone me-3"></i> + 49 234 567 88
                </p>
                <p>
                  <i className="fas fa-print me-3"></i> + 49 234 567 89
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center p-4 copyright text-footer">
          © 2021 Copyright: This project created by Group 2 during the WBS
          coding bootcamp.
        </div>
      </MDBContainer>
    </MDBFooter>
  );
};

export default FooterPage;
