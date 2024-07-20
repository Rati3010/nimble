import React, { Component } from "react";
import { GlobalStateContext, GlobalDispatchContext } from '../context/GlobalState'

class AlternatePayeeDetails extends Component {
  static contextType = GlobalStateContext;

  constructor(props) {
    super(props);
    this.state = {
      alternatePayee1: "",
      alternatePayee2: "",
      city: "",
      street: "",
      country: "",
      bankKey: "",
      bankAccount: "",
    };
  }

  handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const { dispatch } = this.context;
    dispatch({
      type: "SET_INVOICE_DETAILS",
      payload: { [name]: type === "checkbox" ? checked : value },
    });
  };

  render() {
    const { alternatePayee1, alternatePayee2, city, street, country, bankKey, bankAccount } = this.context;
    return (
      <div className="alternate-payee-details">
        <h2>Alternate Payee Details</h2>
        <form>
          <div>
            <label>Alternate Payee 1:</label>
            <input
              type="text"
              name="alternatePayee1"
              value={alternatePayee1}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>Alternate Payee 2:</label>
            <input
              type="text"
              name="alternatePayee2"
              value={alternatePayee2}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>City:</label>
            <input
              type="text"
              name="city"
              value={city}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>Street:</label>
            <input
              type="text"
              name="street"
              value={street}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>Country:</label>
            <input
              type="text"
              name="country"
              value={country}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>Bank Key / IFSC Code:</label>
            <input
              type="text"
              name="bankKey"
              value={bankKey}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>Bank Account Number:</label>
            <input
              type="text"
              name="bankAccount"
              value={bankAccount}
              onChange={this.handleChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default AlternatePayeeDetails;
