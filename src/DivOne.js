import React from "react";

function DivOne(props) {
  return (
    <div>
      <h3 onClick={() => props.changeIt(props.tardis.name)}>
        {props.tardis.name}
      </h3>
    </div>
  );
}
