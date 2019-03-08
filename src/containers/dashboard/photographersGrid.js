import React, { Component } from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBTable,
  MDBTableBody,
  MDBTableHead,
  MDBRow,
  MDBCol
} from "mdbreact";

class PhotographersGrid extends Component {
  render() {
    const { photographers } = this.props;
    return (
      <div>
        <MDBRow className="mb-4">
          <MDBCol md="6">
            <MDBCard>
              <MDBCardBody>
                <MDBTable hover>
                  <MDBTableHead color="blue-grey lighten-4">
                    <tr>
                      <th>#</th>
                      <th>Name</th>
                      <th>Skill</th>
                      <th>Country</th>
                      <th>Status</th>
                    </tr>
                  </MDBTableHead>
                  <MDBTableBody>
                    {photographers.map((photographer, i) => (
                      <tr>
                        <td>{i}</td>
                        <td>{photographer.Name}</td>
                        <td>{photographer.Skill}</td>
                        <td>{photographer.Country}</td>
                        <td>Status</td>
                      </tr>
                    ))}
                  </MDBTableBody>
                </MDBTable>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </div>
    );
  }
}

export default PhotographersGrid;
