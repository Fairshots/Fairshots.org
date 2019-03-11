import React, { Component } from "react";

export default class Sidebar extends Component {
  render() {
    const arteste = [1, 2, 3, 4, 5];
    return (
      <div>
        <div className="nav col-md-2 d-none d-md-block bg-light sidebar">
          <div className="sidebar-sticky">
            <div>
              <ul className="nav flex-column">
                <li className="nav-item nav-link " style={{ fontSize: "1rem" }}>
                  <strong> Histórico</strong>
                </li>
                {arteste.map((e, i) => {
                  console.log("teste de map");
                  return (
                    <li key={i} className="nav-item nav-link border">
                      teste de map
                      <span style={{ cursor: "pointer" }} onClick={() => console.log("teste")}>
                        Teste
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
