import React, { Component } from "react";
import { Link } from "react-router-dom";

class Clients extends Component {
  render() {
    const clients = [
      {
        id: "43265637",
        firstName: "Kevin",
        lastName: "Johnson",
        email: "kjohnson@gmail.com",
        phone: "07400 123456",
        balance: "30"
      },
      {
        id: "4312874981",
        firstName: "Bob",
        lastName: "Smith",
        email: "bsmith@gmail.com",
        phone: "07400 123123",
        balance: "1000.43"
      }
    ];

    if (clients) {
      return (
        <div>
          <div className="row">
            <div className="col-2">
              <h2>
                {" "}
                <i className="fas fa-users" /> Clients
              </h2>
            </div>
          </div>
          <table className="table table-striped">
            <thead className="thead-inverse">
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Balance</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {clients.map(client => (
                <tr key={client.id}>
                  <td>
                    {client.firstName} {client.lastName}
                  </td>
                  <td>{client.email}</td>
                  <td>£{parseFloat(client.balance).toFixed(2)}</td>
                  <td>
                    <Link
                      to={`/clients/${client.id}`}
                      className="btn btn-secondary btn-sm"
                    >
                      <i className="fas fa-arrow-circle-right" /> Details
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }
    return <div />;
  }
}

export default Clients;