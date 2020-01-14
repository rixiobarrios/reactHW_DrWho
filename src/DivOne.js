import React from "react";
import DivTwo from "./DivTwo.js";

function DivOne(props) {
  return (
    <div>
      <DivTwo changeIt={props.changeIt} tardis={props.tardis} />
    </div>
  );
}

export default DivOne;
