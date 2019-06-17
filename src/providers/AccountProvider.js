import React from "react";

// Setup initial context
export const AccountContext = React.createContext();

// Step 2: create context consumer that can be injected into components
export const AccountConsumer = AccountContext.Consumer;

// Create the provider using a traditional React.Component
class AccountProvider extends React.Component {
  state = {
    username: "Derp",
    firstName: "Fred",
    lastName: "Platypus",
    email: "Fred@platypus.com",
    membershipLevel: "Bronze",
    updateAccount: (account) => this.updateAccount(account)
  };

  updateAccount = (account) => {
    this.setState({ ...account, });
  };
  
  render() {
    return(
      <AccountContext.Provider value={this.state}>
        { this.props.children }
      </AccountContext.Provider> 
    );
  };
};

export default AccountProvider;