import React, { Component } from "react";
import PdfView from "./components/PdfView";
import InvoiceDetails from "./components/InvoiceDetails";
import AlternatePayeeDetails from "./components/AlternatePayeeDetails";
import LineItemDetails from "./components/LineItemDetails";
import "./App.css";
import InvoiceSummary from "./components/InvoiceSummary";
import { GlobalStateContext } from "./context/GlobalState";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class App extends Component {

  static contextType = GlobalStateContext;

  saveDraft = async () => {
    const data = this.context;
    toast.promise(
      fetch("http://localhost:8080/api/saveDraft", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then(response => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then(responseData => {
          console.log("Draft saved successfully:", responseData);
        }),
      {
        pending: 'Saving draft...',
        success: 'Draft saved successfully! 👌',
        error: 'Failed to save draft 🤯'
      }
    );
  };

  render() {
    return (
      <>
        <div className="app">
          <div className="pdf-view-container">
            <PdfView />
          </div>
          <div className="form-container">
            <div className="invoice-top-section">
              <p>Invoice Details</p>
              <p>Action History</p>
              <button onClick={this.saveDraft}>Save Draft</button>
            </div>
            <InvoiceDetails />
            <AlternatePayeeDetails />
            <LineItemDetails />
          </div>
        </div>
        <InvoiceSummary />
        <ToastContainer/>
      </>
    );
  }
}

export default App;
