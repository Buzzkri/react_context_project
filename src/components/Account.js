import React, { useContext, } from "react";
import { Card, } from "semantic-ui-react";
import { AccountContext, } from "../providers/AccountProvider";

const Account = () => {
  const value = useContext(AccountContext);
  // const { username, dateJoined, membershipLevel, } = useContext(AccountContext);

  return(
      <Card>
      <Card.Content>
        <Card.Header>
          { value.username }
        </Card.Header>
        <Card.Meta>
          First Name: { value.firstName }
          <br />
          Last Name { value.lastName }
        </Card.Meta>
        <Card.Content>
          <p>Email: { value.email }</p>
          <p>Membership Level: { value.membershipLevel }</p>
        </Card.Content>
      </Card.Content>
    </Card>
  )
};

export default Account;