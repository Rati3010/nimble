import React, { Component } from "react";
import { GlobalStateContext, GlobalDispatchContext } from '../context/GlobalState'

class InvoiceDetails extends Component {
  static contextType = GlobalStateContext;

  constructor(props) {
    super(props);
    this.state = {
      errors: {}
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

  validateForm = () => {
    const errors = {};
    const requiredFields = ["currency", "basicAmt", "taxAmt", "totalAmt", "advancePaid", "netPayableAmt"];
    requiredFields.forEach(field => {
      if (!this.state[field]) {
        errors[field] = "This field is required";
      }
    });
    this.setState({ errors });
    return Object.keys(errors).length === 0;
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.validateForm()
  };

  render() {
    const { currency, basicAmt, taxAmt, totalAmt, advancePaid, tcsApplicable, netPayableAmt } = this.context;
    return (
      <div className="invoice-details">
        <h2>Invoice Amount Details</h2>
        <form>
          <div>
            <label>Currency:<span style={{ color: 'red' }}> *</span></label>
            <input
              type="text"
              name="currency"
              value={currency}
              onChange={this.handleChange}
            />
            {this.state.errors.currency && <p style={{ color: 'red' }}>{this.state.errors.currency}</p>}
          </div>
          <div>
            <label>Basic Amount:<span style={{ color: 'red' }}> *</span></label>
            <input
              type="text"
              name="basicAmt"
              value={basicAmt}
              onChange={this.handleChange}
            />
            {this.state.errors.basicAmt && <p style={{ color: 'red' }}>{this.state.errors.basicAmt}</p>}
          </div>
          <div>
            <label>Tax Amount:<span style={{ color: 'red' }}> *</span></label>
            <input
              type="text"
              name="taxAmt"
              value={taxAmt}
              onChange={this.handleChange}
            />
            {this.state.errors.taxAmt && <p style={{ color: 'red' }}>{this.state.errors.taxAmt}</p>}
          </div>
          <div>
            <label>Total Amount:<span style={{ color: 'red' }}> *</span></label>
            <input
              type="text"
              name="totalAmt"
              value={totalAmt}
              onChange={this.handleChange}
            />
            {this.state.errors.totalAmt && <p style={{ color: 'red' }}>{this.state.errors.totalAmt}</p>}
          </div>
          <div>
            <label>Advance Paid:<span style={{ color: 'red' }}> *</span></label>
            <input
              type="text"
              name="advancePaid"
              value={advancePaid}
              onChange={this.handleChange}
            />
            {this.state.errors.advancePaid && <p style={{ color: 'red' }}>{this.state.errors.advancePaid}</p>}
          </div>
          <div>
            <label>TCS Applicable:</label>
            <input
              type="checkbox"
              name="tcsApplicable"
              checked={tcsApplicable}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>Net Payable Amount:<span style={{ color: 'red' }}> *</span></label>
            <input
              type="text"
              name="netPayableAmt"
              value={netPayableAmt}
              onChange={this.handleChange}
            />
            {this.state.errors.netPayableAmt && <p style={{ color: 'red' }}>{this.state.errors.netPayableAmt}</p>}
          </div>
        </form>
      </div>
    );
  }
}

export default InvoiceDetails;
