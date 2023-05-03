import React from "react";
import {
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBIcon,
  MDBBtn,
  MDBInput,
} from "mdbreact";
import "../styles/contact.css";

const Contact = () => {
  return (
      <div class="container">
        <div class="row test">
          <section className="my-5 sectionLayout">
            <h5 className="h3-responsive font-weight-bold text-center my-5 cardBodyContact">
              CONTACT THE POKEMON CREATER
            </h5>
            <p className="text-center w-responsive mx-auto pb-5">
              You want to leave us a message - we look forward to it !
            </p>
            <MDBRow>
              <MDBCol lg="5" className="lg-0 mb-4">
                <div>
                <MDBCard>
                  <MDBCardBody>
                    <div className="form-header">
                      <h3 className="mt-2 cardBodyContact">
                        <MDBIcon icon="envelope" /> Write to us:
                      </h3>
                    </div>
                    <p className="cardBodyContact">
                      We'll write rarely, but only the best content.
                    </p>
                    <div className="md-form">
                      <MDBInput
                        icon="user"
                        label="Your name"
                        iconClass="grey-text"
                        type="text"
                        id="form-name"
                      />
                    </div>
                    <div className="md-form">
                      <MDBInput
                        icon="envelope"
                        label="Your email"
                        iconClass="grey-text"
                        type="text"
                        id="form-email"
                      />
                    </div>
                    <div className="md-form">
                      <MDBInput
                        icon="tag"
                        label="Subject"
                        iconClass="grey-text"
                        type="text"
                        id="form-subject"
                      />
                    </div>
                    <div className="md-form">
                      <MDBInput
                        icon="pencil-alt"
                        label="Icon Prefix"
                        iconClass="grey-text"
                        type="textarea"
                        id="form-text"
                      />
                    </div>
                      <MDBBtn>Submit</MDBBtn>
                  </MDBCardBody>
                </MDBCard>
                </div>
              </MDBCol>

              <MDBCol lg="7">
                <div
                  id="map-container"
                  className="rounded z-depth-1-half map-container"
                  style={{ height: "35vh" }}
                >
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d76765.98321148289!2d-73.96694563267306!3d40.751663750099084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spl!2spl!4v1525939514494"
                    title="POKEMON"
                    width="500vh"
                    height="500vh"
                    style={{ border: 0 }}
                  />
                </div>
              </MDBCol>

            </MDBRow>
          </section>
        </div>
      </div>
  );
};

export default Contact;
