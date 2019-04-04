import React, { Component } from "react";
import Clients from "../clients/Clients";
import Sidebar from "./Sidebar";

export class Dashboard extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-10">
            <Clients />
          </div>
          <div className="col-2">
            <Sidebar />
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
