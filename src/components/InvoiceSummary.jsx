// src/components/InvoiceSummary.js

import React, { Component } from "react";
import { GlobalStateContext } from "../context/GlobalState";

class InvoiceSummary extends Component {
  static contextType = GlobalStateContext;

  render() {
    const { currency, basicAmt, taxAmt, totalAmt, advancePaid, tcsApplicable, netPayableAmt } = this.context;

    return (
      <div className="invoice-summary">
        <div>
          <strong>Currency:</strong> {currency || "N/A"}
        </div>
        <div>
          <strong>Inv Basic Amt:</strong> {basicAmt || "N/A"}
        </div>
        <div>
          <strong>Basic Tax Amt:</strong> {taxAmt || "N/A"}
        </div>
        <div>
          <strong>Total Amt:</strong> {totalAmt || "N/A"}
        </div>
        <div>
          <strong>TDS Amt:</strong> {advancePaid || "N/A"}
        </div>
        <div>
          <strong>Net Payable Amt:</strong> {netPayableAmt || "N/A"}
        </div>
        <div>
          <strong>Basic Amt Diff:</strong> {tcsApplicable ? "Yes" : "No"}
        </div>
       <div className="invoice-summary-button">
        <button>Accept</button>
        <button>Reject</button>
       </div>
      </div>
    );
  }
}

export default InvoiceSummary;
