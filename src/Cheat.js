import React, { Component } from "react";
import { gql, graphql } from "react-apollo";
import { Header, Button } from "semantic-ui-react";
import { userProgressQuery } from "./ProgressList";

class Cheat extends Component {
  sendEvent(event, button) {
    const { mutate } = this.props;
    mutate({
      variables: {
        name: "add_person",
        userId: 1
      },
      refetchQueries: [{ query: userProgressQuery, variables: { userId: 1 } }]
    });
  }

  render() {
    return (
      <div>
        <Header
          size="large"
          textAlign="left"
          dividing
          icon="bomb"
          content="Cheating"
        />
        <Button
          primary
          content="Send 'Add Person' event"
          icon="user"
          labelPosition="right"
          onClick={this.sendEvent.bind(this)}
        />
      </div>
    );
  }
}

export default graphql(gql`
  mutation AddEvent($name: String!, $userId: Int!) {
    event(name: $name, userId: $userId) {
      id
    }
  }
`)(Cheat);
