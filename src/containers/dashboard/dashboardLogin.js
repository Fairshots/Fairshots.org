import React, { Component } from "react";
import { MDBJumbotron, MDBBtn, MDBContainer, MDBRow, MDBCol } from "mdbreact";

class dashboardLogin extends Component {
  render() {
    return (
      <div>
        <MDBContainer className="mt-5 text-center">
          <MDBRow>
            <MDBCol>
              <MDBJumbotron>
                <MDBContainer>
                  <MDBRow className="d-flex justify-content-center">
                    <MDBCol md="6">
                      <form>
                        <p className="h4 text-center mb-4">Sign in</p>
                        <label htmlFor="defaultFormLoginEmailEx" className="grey-text">
                          Your email
                        </label>
                        <input type="email" id="defaultFormLoginEmailEx" className="form-control" />
                        <br />
                        <label htmlFor="defaultFormLoginPasswordEx" className="grey-text">
                          Your password
                        </label>
                        <input
                          type="password"
                          id="defaultFormLoginPasswordEx"
                          className="form-control"
                        />
                        <div className="text-center mt-4">
                          <MDBBtn color="indigo" type="submit">
                            Login
                          </MDBBtn>
                        </div>
                      </form>
                    </MDBCol>
                  </MDBRow>
                </MDBContainer>
              </MDBJumbotron>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    );
  }
}

export default dashboardLogin;
