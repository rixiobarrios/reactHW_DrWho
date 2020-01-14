import React from "react";
import DivThree from "./DivThree.js";
import DivFour from "./DivFour.js";

class DivTwo extends React.Component {
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
        <DivThree changeIt={this.props.changeIt} tardis={this.props.tardis} />
        <DivFour changeIt={this.changeIt} tardis={this.state.tardis} />
      </div>
    );
  }
}

export default DivTwo;
