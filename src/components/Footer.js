import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter, MDBMask, } from "mdbreact";

const FooterPage = () => {
  return (
    
    <MDBFooter  className="font-small" style={{
            backgroundImage:
            `url(${process.env.PUBLIC_URL + '/img/pokemon-screensaver.jpg'})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
    }}>

    <MDBMask overlay="blue-light" >
      <MDBContainer fluid className="text-center text-md-left pt-5" >
        
        <MDBRow >
          <MDBCol >
            <h4>
              This is a project which evolved during a WBS Coding School Course, with group 2.
            </h4>
 
          </MDBCol>

          <MDBCol md="6" >
            <MDBContainer>
            <MDBRow> 
              <MDBCol md="1"></MDBCol>
              <MDBCol md="9"><h4 className="text-center">Coded with love by</h4>
              </MDBCol>
            </MDBRow>
            <MDBRow className="d-flex justify-content-center flex-shrink-1">
              <MDBCol lg="1" md="0"></MDBCol>

            
              <MDBCol md="2"></MDBCol>
            </MDBRow>
            </MDBContainer>
              
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
 
      </div>
    </MDBMask> 
    </MDBFooter>
  
  );
}

export default FooterPage;


