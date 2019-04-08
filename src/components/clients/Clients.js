import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";

import Spinner from "../layout/Spinner";

class Clients extends Component {
  state = {
    totalOwed: 0,
    totalOfClients: 0,
    averageOwed: 0
  };

  static getDerivedStateFromProps(props, state) {
    const { clients } = props;

    if (clients) {
      const total = clients.reduce((total, client) => {
        return total + parseFloat(client.balance.toString());
      }, 0);

      const clientsCount = clients.length;

      const average = total / clientsCount;

      return {
        totalOwed: total,
        totalOfClients: clientsCount,
        averageOwed: average
      };
    }

    return null;
  }

  render() {
    const { clients } = this.props;
    const { totalOwed, totalOfClients, averageOwed } = this.state;

    if (clients) {
      return (
        <div>
          <div className="row">
            <div className="col-6">
              <h2>
                {" "}
                <i className="fas fa-users" /> Clients
              </h2>
            </div>
            <div className="col-6">
              <h5 className="text-right text-secondary">
                Total Owed{" "}
                <span className="text-primary">
                  £{parseFloat(totalOwed).toFixed(2)}
                </span>
              </h5>
              <h4 className="text-right text-secondary">
                Number of clients:{" "}
                <span className="text-primary">{totalOfClients}</span>
              </h4>
              <h3 className="text-right text-secondary">
                Average owed:{" "}
                <span className="text-primary">
                  £{parseFloat(averageOwed).toFixed(2)}
                </span>
              </h3>
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
                      to={`/client/${client.id}`}
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
    } else {
      return <Spinner />;
    }
  }
}

Clients.propTypes = {
  firestore: PropTypes.object.isRequired,
  clients: PropTypes.array
};

export default compose(
  firestoreConnect([{ collection: "clients" }]),
  connect((state, props) => ({
    clients: state.firestore.ordered.clients
  }))
)(Clients);
