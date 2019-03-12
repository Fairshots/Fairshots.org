import React, { Component } from "react";

export default class Sidebar extends Component {
  render() {
    const arteste = [1, 2, 3, 4, 5];
    return (
      <div
        style={{
          height: "600px",
          border: "1px solid #dee2e6",
          boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.12)"
        }}
      >
        <ul className="nav flex-column">
          <li className="nav-item nav-link border">
            <strong>Menus disponíveis</strong>
          </li>
          {arteste.map((e, i) => (
            <li
              key={i}
              className="nav-item nav-link border"
              style={{ cursor: "pointer" }}
              onClick={() => console.log("teste")}
            >
              Menu {e}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
