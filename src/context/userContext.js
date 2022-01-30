import React from "react";

const UserContext = React.createContext();

class UserContextProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = { user: {}, setUser: this.setUser };
  }

  setUser = user => {
    this.setState({ user: user });
  };

  render() {
    return <UserContext.Provider value={this.state}>{this.props.children}</UserContext.Provider>;
  }
}

export { UserContextProvider, UserContext };
