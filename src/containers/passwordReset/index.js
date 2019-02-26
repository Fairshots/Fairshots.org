import React, { useState } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdbreact";

const PasswordReset = () => {
    const [state, setState] = useState({ email: "", newpassword: "" });
    return (
        <MDBContainer>
            <MDBRow center>
                <MDBCol md="6">
                    <form>
                        <p className="h4 text-center mt-4 mb-4">Set up your new password</p>
                        <input
                            type="email"
                            id="email"
                            placeholder="e-mail"
                            className="form-control"
                        />
                        <br />
                        <input
                            type="new password"
                            placeholder="password"
                            id="newpassword"
                            className="form-control"
                        />
                        <br />
                        <input
                            type="password"
                            placeholder="retype new password"
                            id="newpassword"
                            className="form-control"
                        />
                        <div className="text-center mt-4">
                            <MDBBtn color="dark-green" type="submit">
                                Login
                            </MDBBtn>
                        </div>
                    </form>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
};

export default PasswordReset;
