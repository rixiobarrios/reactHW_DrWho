import React, { Component } from "react";
import DivOne from "./DivOne.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tardis: {
        name: "Time and Relative Dimension in Space",
        caps: false
      }
    };
  }

  changeIt = text => {
    if (this.state.tardis.caps) {
      this.setState({
        tardis: {
          name: text.toLowerCase(),
          caps: false
        }
      });
    } else {
      this.setState({
        tardis: {
          name: text.toUpperCase(),
          caps: true
        }
      });
    }
  };
  render() {
    return (
      <div>
        <DivOne changeIt={this.changeIt} tardis={this.state.tardis} />
      </div>
    );
  }
}

export default App;
