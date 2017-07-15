import React from "react";

function Badge({ props }) {
  return (
    <div>
      <p>
        {props.name}
      </p>
      <p>
        {props.description}
      </p>
      <p>
        {props.count} - {props.eventName}
      </p>
    </div>
  );
}

export default Badge;
