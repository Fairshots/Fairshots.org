import React, { Component } from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBTable,
  MDBTableBody,
  MDBTableHead,
  MDBRow,
  MDBCol,
  MDBDataTable,
  MDBBtn,
  MDBModalHeader,
  MDBModalBody,
  MDBModalFooter,
  MDBModal,
  MDBButton
} from "mdbreact";

class PhotographersGrid extends Component {
  state = {
    modal: false
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  render() {
    const currentJson = [
      {
        id: "db4a4b10-d0b4-11e8-b664-132751b5e509",
        Name: "xxxx xxxx",
        Skill: "Professional",
        Biography: "xxxxxx",
        ProfilePic:
          "https://res.cloudinary.com/fairshots/image/upload/v1541017582/k9wcv31ljzv1ilme9ctl.png",
        Country: "Brazil",
        Photos: [
          {
            id: 1,
            cloudlink:
              "https://res.cloudinary.com/fairshots/image/upload/v1539718214/h1z04mnjpdjismsszf0y.gif"
          },
          {
            id: 2,
            cloudlink:
              "https://res.cloudinary.com/fairshots/image/upload/v1539806700/c5rubd78oo3bx7repors.jpg"
          },
          {
            id: 3,
            cloudlink:
              "https://res.cloudinary.com/fairshots/image/upload/v1539806881/nbc6omkfmb1zj5jepyuo.jpg"
          }
        ]
      },
      {
        id: "b2a42c10-95ab-11e8-9fe1-3588e7d2bd38",
        Name: "teste11",
        Skill: "Professional",
        Biography: "testing if it can be updated",
        ProfilePic: "http://teste.com",
        Country: "Brazil",
        Photos: [
          {
            id: 163,
            cloudlink: "html://teste2"
          }
        ]
      },
      {
        id: "78122730-d630-11e8-aa95-8755a3d94389",
        Name: "LEANDRO CUNHA",
        Skill: "Amateur",
        Biography: "I'm not really professional I just wanna be part of Fairshots",
        ProfilePic:
          "https://res.cloudinary.com/fairshots/image/upload/v1540473034/m0aa9x5pqfxtbprydvlf.png",
        Country: "Brazil",
        Photos: [
          {
            id: 170,
            cloudlink:
              "https://res.cloudinary.com/fairshots/image/upload/v1550762104/qcbgdnerihajsfpflnft.png"
          }
        ]
      },
      {
        id: "2dbb2900-d894-11e8-8272-23ed56f44d18",
        Name: "teste111",
        Skill: "Professional",
        Biography: "teste",
        ProfilePic:
          "https://res.cloudinary.com/fairshots/image/upload/v1540499155/tvp9otwzi26inxnvfnsz.jpg",
        Country: "United States",
        Photos: [
          {
            id: 19,
            cloudlink:
              "https://res.cloudinary.com/fairshots/image/upload/v1544467763/tv4vyfbupcquoxsofz3q.jpg"
          }
        ]
      },
      {
        id: "eae306b0-37c6-11e9-9201-837fc23dbcbc",
        Name: "Fernando Miranda Costa Azevedo",
        Skill: "Professional",
        Biography: "professional gorilla photographer. likes banana.",
        ProfilePic:
          "https://res.cloudinary.com/fairshots/image/upload/v1550966307/qizpgamkduqqan57wgqs.jpg",
        Country: "New Zealand",
        Photos: [
          {
            id: 171,
            cloudlink:
              "https://res.cloudinary.com/fairshots/image/upload/v1550966508/tc7boav743f4ptnt36zd.jpg"
          },
          {
            id: 172,
            cloudlink:
              "https://res.cloudinary.com/fairshots/image/upload/v1550966509/dtr7g5uslwribznqimut.jpg"
          },
          {
            id: 173,
            cloudlink:
              "https://res.cloudinary.com/fairshots/image/upload/v1550966511/p9cngwzbqmeumeq0uo1r.jpg"
          },
          {
            id: 174,
            cloudlink:
              "https://res.cloudinary.com/fairshots/image/upload/v1550966514/pleglhse0ofy6ejsy5it.jpg"
          },
          {
            id: 175,
            cloudlink:
              "https://res.cloudinary.com/fairshots/image/upload/v1550966518/lfe9tx7g3i83rzuylrhw.jpg"
          },
          {
            id: 176,
            cloudlink:
              "https://res.cloudinary.com/fairshots/image/upload/v1550966523/whnakkxnnlgs1fkxmjgm.jpg"
          },
          {
            id: 177,
            cloudlink:
              "https://res.cloudinary.com/fairshots/image/upload/v1550966529/l70rcmjhoku4ppr8nghl.jpg"
          },
          {
            id: 178,
            cloudlink:
              "https://res.cloudinary.com/fairshots/image/upload/v1550966536/ykrd9eervs13urvbvlny.jpg"
          },
          {
            id: 179,
            cloudlink:
              "https://res.cloudinary.com/fairshots/image/upload/v1550966544/jljaadzn6eqry9hf2umx.jpg"
          },
          {
            id: 180,
            cloudlink:
              "https://res.cloudinary.com/fairshots/image/upload/v1550966553/ntj8ndikh5jz2v3szmb6.jpg"
          },
          {
            id: 182,
            cloudlink:
              "https://res.cloudinary.com/fairshots/image/upload/v1550966574/ym50ydduwnygyveqgqwf.jpg"
          },
          {
            id: 183,
            cloudlink:
              "https://res.cloudinary.com/fairshots/image/upload/v1550967728/egtrrp4yh48vo1vuezxg.jpg"
          },
          {
            id: 184,
            cloudlink:
              "https://res.cloudinary.com/fairshots/image/upload/v1550967728/y2ho8pcxuz3mkbxaziix.jpg"
          },
          {
            id: 185,
            cloudlink:
              "https://res.cloudinary.com/fairshots/image/upload/v1550967730/yr3qodgt3hunq0w9qild.jpg"
          }
        ]
      },
      {
        id: "4243ef80-20c7-11e9-94b6-234b8457b21d",
        Name: "lvc",
        Skill: "Amateur",
        Biography: "xxx",
        ProfilePic: "/images/org-logo.png",
        Country: "Brazil",
        Photos: []
      },
      {
        id: "4fccef70-ff99-11e8-b233-d33cb681d5b4",
        Name: "Rodrigo Garcete",
        Skill: "Student",
        Biography: "wwww",
        ProfilePic:
          "https://res.cloudinary.com/fairshots/image/upload/v1544789454/xxi69jrjub22bt2sul9d.jpg",
        Country: "Paraguay",
        Photos: []
      },
      {
        id: "beb2ee40-3a21-11e9-99bf-abc3bb7c9aab",
        Name: "Edilson Borges",
        Skill: "Professional",
        Biography: "ssss",
        ProfilePic:
          "https://res.cloudinary.com/fairshots/image/upload/v1551225932/jcg9rmw4n1wduipc89tl.jpg",
        Country: "Brazil",
        Photos: []
      }
    ];
    // const { photographers } = this.props;
    const photographers = currentJson;

    return (
      <div>
        <MDBCard>
          <MDBBtn onClick={this.toggle}>Modal</MDBBtn>
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
                  <tr key={photographer.id}>
                    <td>{i}</td>
                    <td>{photographer.Name}</td>
                    <td>{photographer.Skill}</td>
                    <td>{photographer.Country}</td>
                    <td>Status</td>
                  </tr>
                ))}
              </MDBTableBody>
            </MDBTable>
            <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
              <MDBModalHeader toggle={this.toggle}>MDBModal title</MDBModalHeader>
              <MDBModalBody>(...)</MDBModalBody>
              <MDBModalFooter>
                <MDBBtn color="secondary" onClick={this.toggle}>
                  Close
                </MDBBtn>
                <MDBBtn color="primary">Save changes</MDBBtn>
              </MDBModalFooter>
            </MDBModal>
          </MDBCardBody>
        </MDBCard>
      </div>
    );
  }
}

export default PhotographersGrid;
