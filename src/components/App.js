import React from "react";

import Mammal from "./Mammal";
// To create a Provider component
// 1. we need to impport the context we've created
import MammalContext from "../contexts/MammalContext";

const style = {
  display: "grid",
  gridTemplateColumns: "200px 80px 80px",
  gridAutoRows: "40px",
  gridColumnGap: "10px"
};
class App extends React.Component {
  state = {
    mammal: {
      name: "Dog",
      sound: "Bark"
    }
  };

  onMammalChange = mammal => {
    this.setState({
      mammal: mammal
    });
  };

  render() {
    return (
      <div style={style}>
        <p> Select an Animal: </p>
        <button
          onClick={() => this.onMammalChange({ name: "Dog", sound: "Bark" })}
        >
          Dog
        </button>
        <button
          onClick={() => this.onMammalChange({ name: "Cat", sound: "Miaw" })}
        >
          Cat
        </button>
        {/* 2. We need to wrap the component that needs to know about the context */}
        {/* 3. when we render MammalContext Provider, we are going to assign a value
            the value prop is a special property name, we can't change it to another name
         */}
        {/* 4. we are going to pass the value the information that we want 
            to update the context object with. in our case it is the state.mammal
          */}
        <MammalContext.Provider value={this.state.mammal}>
          <Mammal />
        </MammalContext.Provider>
        <MammalContext.Provider value={{ name: "Cat", sound: "Miaw" }}>
          <Mammal />
        </MammalContext.Provider>

        <Mammal />
      </div>
    );
  }
}

export default App;