import React, { Component } from "react";

class LineItemDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lineItems: [{ id: 1, debit: "", glDesc: "", glCode: "", text: "" }],
    };
  }

  handleChange = (e, index) => {
    const { name, value } = e.target;
    const lineItems = [...this.state.lineItems];
    lineItems[index][name] = value;
    this.setState({ lineItems });
  };

  addItem = () => {
    this.setState((prevState) => ({
      lineItems: [
        ...prevState.lineItems,
        {
          id: prevState.lineItems.length + 1,
          debit: "",
          glDesc: "",
          glCode: "",
          text: "",
        },
      ],
    }));
  };

  render() {
    return (
      <div className="line-item-details">
        <h2>Line Item Details</h2>
        <table>
          <thead>
            <tr>
              <th>Select Debit</th>
              <th>GL Description</th>
              <th>GL Code</th>
              <th>Text(Do not enter special character)</th>
            </tr>
          </thead>
          <tbody>
            {this.state.lineItems.map((item, index) => (
              <tr key={item.id}>
                <td>
                  <input
                    type="text"
                    name="debit"
                    value={item.debit}
                    onChange={(e) => this.handleChange(e, index)}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="glDesc"
                    value={item.glDesc}
                    onChange={(e) => this.handleChange(e, index)}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="glCode"
                    value={item.glCode}
                    onChange={(e) => this.handleChange(e, index)}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="text"
                    value={item.text}
                    onChange={(e) => this.handleChange(e, index)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="line-items-button">
          <button type="button" onClick={this.addItem}>
            Add
          </button>
          <button type="button">Calculate</button>
        </div>
      </div>
    );
  }
}

export default LineItemDetails;
