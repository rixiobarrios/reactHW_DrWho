import React from "react";
import DivTwo from "./DivTwo.js";

function DivOne(props) {
  return (
    <div>
      <h3 onClick={() => props.changeIt(props.tardis.name)}>
        {props.tardis.name}
      </h3>
      <DivTwo changeIt={props.changeIt} tardis={props.state.tardis} />
    </div>
  );
}

export default DivOne;
