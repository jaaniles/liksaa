import React from "react";

const DEFAULT_STATE = {
  hello: "world"
};

export const AppContext = React.createContext(DEFAULT_STATE);

export default class Provider extends React.Component {
  state = DEFAULT_STATE;

  /*
  setLocale = async path => {
    const locale = getLocale(path) || supportedLocales[1];
    this.setState({ locale });
  };
  */

  helloworld = async locObj => {
    console.log(locObj);
  };

  render() {
    return (
      <AppContext.Provider
        value={{
          ...this.state,
          helloworld: this.helloworld
        }}
      >
        {this.props.children}
      </AppContext.Provider>
    );
  }
}
