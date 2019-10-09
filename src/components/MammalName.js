import React from "react";

import MammalContext from "../contexts/MammalContext";

class MammalName extends React.Component {
  renderMammalName = mammal => mammal.name;
  render() {
    return (
      <div>
        <MammalContext.Consumer>
          {mammal => this.renderMammalName(mammal)}
        </MammalContext.Consumer>
      </div>
    );
  }
}

export default MammalName;