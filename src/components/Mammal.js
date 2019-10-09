import React from "react";

import MammalName from "./MammalName";
import MammalSound from "./MammalSound";

const Mammal = props => {
  return (
    <div>
      <MammalName />
      <MammalSound />
    </div>
  );
};

export default Mammal;
