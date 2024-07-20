import React, { createContext, Component } from "react";

// Initial state
const initialState = {
  currency: "",
  basicAmt: "",
  taxAmt: "",
  totalAmt: "",
  advancePaid: "",
  tcsApplicable: false,
  netPayableAmt: "",
  alternatePayee1:'',
  alternatePayee2:'',
  city:'',
  street:'',
  country:'',
  bankKey:'',
  bankAccount:'',
};

// Create context
const GlobalStateContext = createContext(initialState);
const GlobalDispatchContext = createContext(null);

// Global State Provider
class GlobalStateProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...initialState,
      dispatch: this.dispatch.bind(this),
    };
  }

  dispatch(action) {
    this.setState((prevState) => ({
      ...prevState,
      ...action.payload,
    }));
  }

  render() {
    return (
      <GlobalStateContext.Provider value={this.state}>
        <GlobalDispatchContext.Provider value={this.state.dispatch}>
          {this.props.children}
        </GlobalDispatchContext.Provider>
      </GlobalStateContext.Provider>
    );
  }
}

export { GlobalStateProvider, GlobalStateContext, GlobalDispatchContext };
