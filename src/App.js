import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BadgeList from "./BadgeList";
import { Container, Header } from "semantic-ui-react";
import glamorous from "glamorous";

const StyledContainer = glamorous(Container)({
  padding: "20px"
});

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <StyledContainer fluid>
          <Header
            size="large"
            textAlign="left"
            dividing
            icon="gamepad"
            content="Badges"
          />
          <BadgeList />
        </StyledContainer>
      </div>
    );
  }
}

export default App;
